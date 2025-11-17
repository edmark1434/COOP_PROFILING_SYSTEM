"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
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
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
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
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { X } from "lucide-react"

const formSchema = z.object({
    amount: z
        .string()
        .min(1, "Enter a loan amount")
        .refine((val) => !isNaN(Number(val)), "Invalid number")
        .refine((val) => Number.isInteger(Number(val)), "Amount must be in whole pesos")
        .refine((val) => Number(val) >= 1, "Invalid loan amount")
        .refine((val) => Number(val) <= 300000, "Amount exceeds the loan limit: ₱300,000.00"),
    purpose: z
        .string()
        .min(1, "Choose a loan purpose"),
    plan: z
        .string()
        .min(1, "Choose a plan"),
})

const loanPurposes = [
    { name: "Purpose 1", id: "1" },
    { name: "Purpose 2", id: "2" },
    { name: "Purpose 3", id: "3" },
] as const

const plans = [
    { id: "3-5", termMonths: 3, interestRate: 5 },
    { id: "6-6", termMonths: 6, interestRate: 6 },
    { id: "12-8", termMonths: 12, interestRate: 8 },
] as const

export default function LoanApplicationForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: "",
            purpose: "",
            plan: "plan1",
        },
    })

    const amount = Number(form.watch("amount"));

    function onSubmit(data: z.infer<typeof formSchema>) {
        const [termMonthsStr, interestRateStr] = data.plan.split("-")
        const termMonths = Number(termMonthsStr)
        const interestRate = Number(interestRateStr)

        const submitData = {
            amount: Number(data.amount),
            purpose: Number(data.purpose),
            termMonths: termMonths,
            interestRate: interestRate,
        }

        toast("You submitted the following values:", {
            description: (
                <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                  <code>{JSON.stringify(submitData, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <Card className="w-full sm:max-w-md">
            <CardHeader className="px-10 pt-4 flex flex-row justify-between items-center">
                <CardTitle>Apply for Loan</CardTitle>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </CardHeader>
            <CardContent className="px-10">
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="amount"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel htmlFor="form-rhf-loan-amount">
                                            Loan Amount
                                        </FieldLabel>
                                        <FieldDescription>
                                            Enter the total amount you wish to borrow.
                                        </FieldDescription>
                                    </FieldContent>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <InputGroupText>₱</InputGroupText>
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            {...field}
                                            id="form-rhf-loan-amount"
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
                        <Controller
                            name="purpose"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel htmlFor="form-rhf-loan-purpose">
                                            Loan Purpose
                                        </FieldLabel>
                                        <FieldDescription>
                                            Please select the reason for your loan.
                                        </FieldDescription>
                                    </FieldContent>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            id="form-rhf-loan-purpose"
                                            aria-invalid={fieldState.invalid}
                                            className="min-w-[120px]"
                                        >
                                            <SelectValue placeholder="Select purpose" />
                                        </SelectTrigger>
                                        <SelectContent position="item-aligned">
                                            {loanPurposes.map((purpose) => (
                                                <SelectItem key={purpose.id} value={purpose.id}>
                                                    {purpose.name}
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
                            name="plan"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <FieldSet data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>Installment Plan</FieldLabel>
                                        <FieldDescription>
                                            Longer plans have higher interest rates.
                                        </FieldDescription>
                                    </FieldContent>
                                    <RadioGroup
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        aria-invalid={fieldState.invalid}
                                    >
                                        {plans.map((plan) => (
                                            <FieldLabel
                                                key={plan.id}
                                                htmlFor={`form-rhf-radiogroup-${plan.id}`}
                                            >
                                                <Field
                                                    orientation="horizontal"
                                                    data-invalid={fieldState.invalid}
                                                >
                                                    <FieldContent>
                                                        <FieldLabel>{plan.termMonths + " months"}</FieldLabel>
                                                        <FieldDescription>
                                                            {amount && !isNaN(amount)
                                                                ? `₱ ${Math.ceil((amount * (1 + plan.interestRate / 100)) / plan.termMonths).toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / month`
                                                                : `at ${plan.interestRate}% interest`}
                                                        </FieldDescription>
                                                    </FieldContent>
                                                    <RadioGroupItem
                                                        value={plan.id}
                                                        id={`form-rhf-radiogroup-${plan.id}`}
                                                        aria-invalid={fieldState.invalid}
                                                    />
                                                </Field>
                                            </FieldLabel>
                                        ))}
                                    </RadioGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </FieldSet>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="px-10 pb-4">
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-demo">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
        </div>
    )
}
