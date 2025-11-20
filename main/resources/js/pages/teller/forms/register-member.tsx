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
    FieldContent, FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
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
import { X } from "lucide-react"
import {router, usePage} from "@inertiajs/react";

const formSchema = z.object({
    firstName: z
        .string()
        .min(1, "Enter first name"),
    middleName: z
        .string()
        .optional(),
    lastName: z
        .string()
        .min(1, "Enter last name"),
    suffix: z
        .string()
        .optional(),
    email: z
        .email("Invalid email address"),
    contactNum: z
        .string()
        .trim()
        .regex(
            /^(9\d{9}|[2-9]\d{1,3}\d{7,8})$/,
            "Invalid PH contact number"),
})

export default function MemberRegistrationForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            suffix: "",
            email: "",
            contactNum: "",
        },
    })

    const { suffixes } = usePage<{
        suffixes: string[];
    }>().props

    function onSubmit(data: z.infer<typeof formSchema>) {
        const fullContactNum = "+63" + data.contactNum;

        const submitData = {
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            suffix: data.suffix,
            email: data.email,
            contactNum: fullContactNum,
        }

        router.post(window.location.pathname, submitData, {
            onSuccess: () => {
                toast.success("Member registered successfully!")
                form.reset()
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
                <CardTitle>Register Member</CardTitle>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </CardHeader>
            <CardContent className="px-10">
                <form id="form-rhf-member-registration" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="firstName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            First Name
                                        </FieldLabel>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter first name"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="middleName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Middle Name
                                        </FieldLabel>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="This field is optional"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <FieldGroup className="flex flex-row items-start gap-4">
                            <Controller
                                name="lastName"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="w-full">
                                        <FieldContent>
                                            <FieldLabel>
                                                Last Name
                                            </FieldLabel>
                                        </FieldContent>
                                        <Input
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter last name"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="suffix"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="w-fit">
                                        <FieldContent>
                                            <FieldLabel>
                                                Suffix
                                            </FieldLabel>
                                        </FieldContent>
                                        <Select
                                            name={field.name}
                                            value={field.value}
                                            onValueChange={(v) => field.onChange(v === "__none" ? null : v)}
                                        >
                                            <SelectTrigger
                                                aria-invalid={fieldState.invalid}
                                                className="min-w-[120px]"
                                            >
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="item-aligned">
                                                <SelectItem key="__none" value="__none">
                                                    (None)
                                                </SelectItem>
                                                {suffixes.map((suffix) => (
                                                    <SelectItem key={suffix} value={suffix}>
                                                        {suffix}
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
                        </FieldGroup>
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="w-full">
                                    <FieldContent>
                                        <FieldLabel>
                                            Email Address
                                        </FieldLabel>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter email"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="contactNum"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Contact Number
                                        </FieldLabel>
                                        <FieldDescription>
                                            Both PH mobile and landline numbers are accepted.
                                        </FieldDescription>
                                    </FieldContent>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <InputGroupText>+63</InputGroupText>
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="xxxxxxxxxx"
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
                    <Button type="submit" form="form-rhf-member-registration">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
        </div>
    )
}
