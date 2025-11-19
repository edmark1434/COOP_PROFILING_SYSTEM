"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {toast, Toaster} from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldContent,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MemberCombobox } from "@/components/member-combobox";
import { X } from "lucide-react"
import {router, usePage} from "@inertiajs/react";

const formSchema = z.object({
    type: z
        .string()
        .min(1, "Choose a transaction type"),
    member: z
        .string()
        .min(1, "Choose a member"),
    amount: z
        .string()
        .min(1, "Enter the transaction amount")
        .refine((val) => !isNaN(Number(val)), "Invalid number")
        .refine((val) => Number.isInteger(Number(val)), "Amount must be in whole pesos")
        .refine((val) => Number(val) >= 1, "Invalid transaction amount")
        .refine((val) => Number(val) <= 300000, "Amount exceeds the transaction limit: ₱300,000.00"),
})

export default function TransactionForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: "",
            member: "",
            amount: "",
        },
    })

    const { transactionTypes } = usePage<{
        transactionTypes: string[];
    }>().props

    function onSubmit(data: z.infer<typeof formSchema>) {
        const submitData = {
            type: data.type,
            member: Number(data.member),
            amount: Number(data.amount),
        }

        router.post(window.location.pathname, submitData, {
            onSuccess: () => {
                toast.success("Transaction recorded successfully.")
                form.reset()
                window.history.back()
            },
            onError: (errors: Record<string, string>) => {
                for (const [field, message] of Object.entries(errors)) {
                    form.setError(field as keyof typeof data, { message });
                }
            },
        })
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <Toaster/>
            <Card className="w-full sm:max-w-md">
            <CardHeader className="px-10 pt-4 flex flex-row justify-between items-center">
                <CardTitle>Add Transaction</CardTitle>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </CardHeader>
            <CardContent className="px-10">
                <form id="form-rhf-transaction" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="type"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Transaction Type
                                        </FieldLabel>
                                    </FieldContent>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            aria-invalid={fieldState.invalid}
                                            className="min-w-[120px]"
                                        >
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent position="item-aligned">
                                            {transactionTypes.map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="member"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Member Name
                                        </FieldLabel>
                                    </FieldContent>
                                    <MemberCombobox
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="amount"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Transaction Amount
                                        </FieldLabel>
                                    </FieldContent>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <InputGroupText>₱</InputGroupText>
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="0.00"
                                            autoComplete="off"
                                        />
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="px-10 pt-2 pb-4">
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-transaction">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
        </div>
    )
}
