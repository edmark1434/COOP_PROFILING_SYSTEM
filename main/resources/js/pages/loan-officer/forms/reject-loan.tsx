"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Link } from "@inertiajs/react"
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
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { router } from "@inertiajs/react";
import { loanView } from "@/routes/loan-officer"

const formSchema = z.object({
    remarks: z
        .string()
        .min(1, "This field is required"),
})

const suffixes = [
    "Jr.",
    "Sr.",
    "I",
    "II",
    "III",
    "IV",
    "V",
] as const

export default function LoanRejectionForm(id:number) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            remarks: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        router.post(window.location.pathname, data, {
            onSuccess: () => {
                toast.success("Loan rejected successfully.")
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
                <CardTitle>Reject Loan</CardTitle>
                <Link href={loanView(id)}>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <X />
                    </Button>
                </Link>
            </CardHeader>
            <CardContent className="px-10">
                <form id="form-rhf-loan-rejection" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="remarks"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Remarks
                                        </FieldLabel>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Reason for rejection"
                                        autoComplete="off"
                                    />
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
                    <Button type="submit" form="form-rhf-loan-rejection">
                        Proceed
                    </Button>
                </Field>
            </CardFooter>
        </Card>
        </div>
    )
}
