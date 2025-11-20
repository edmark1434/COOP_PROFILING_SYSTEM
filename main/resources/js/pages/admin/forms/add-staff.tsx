"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {toast, Toaster} from "sonner"
import * as z from "zod"
import {Link, router} from "@inertiajs/react"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { X } from "lucide-react"
import { staff } from "@/routes/admin"

const formSchema = z.object({
    fullName: z
        .string()
        .min(1, "Enter first name"),
    email: z
        .email("Invalid email address"),
    role: z
        .string()
        .min(1, "Choose a staff role"),
})

const roles = [
    "Teller",
    "Loan Officer",
    "Administrator",
] as const

export default function StaffAddForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            role: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        router.post(window.location.pathname, data, {
            onSuccess: () => {
                toast.success("Staff added successfully.")
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
                <CardTitle>Add Staff</CardTitle>
            <Link href={staff()}>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </Link>
            </CardHeader>
            <CardContent className="px-10">
                <form id="form-rhf-staff-add" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="fullName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Full Name
                                        </FieldLabel>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter full name"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
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
                            name="role"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldContent>
                                        <FieldLabel>
                                            Staff Role
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
                                            <SelectValue placeholder="Select role" />
                                        </SelectTrigger>
                                        <SelectContent position="item-aligned">
                                            {roles.map((role) => (
                                                <SelectItem key={role} value={role}>
                                                    {role}
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
                </form>
            </CardContent>
            <CardFooter className="px-10 pt-2 pb-4">
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-staff-add">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
        </div>
    )
}
