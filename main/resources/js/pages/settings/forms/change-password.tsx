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
import { X } from "lucide-react"
import { router } from "@inertiajs/react";

const formSchema = z.object({
    currentPassword: z
        .string()
        .min(1, "Enter current password"),
    newPassword: z
        .string()
        .min(8, "At least 8 characters required"),
    confirmNewPassword: z
        .string()
        .min(1, "Enter password confirmation"),
}).refine((data => data.newPassword === data.confirmNewPassword), {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
});

export default function StaffRoleChangeForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        router.post(window.location.pathname, data, {
            onSuccess: () => {
                toast.success("Password changed successfully.")
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
                <CardTitle>Change Password</CardTitle>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </CardHeader>
            <CardContent className="px-10">
                <form id="form-rhf-staff-role-change" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="currentPassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="w-full">
                                    <FieldContent>
                                        <FieldLabel>
                                            Current Password
                                        </FieldLabel>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter password"
                                        autoComplete="off"
                                        type="password"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="newPassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="w-full">
                                    <FieldContent>
                                        <FieldLabel>
                                            New Password
                                        </FieldLabel>
                                        <FieldDescription>
                                            Must be at least 8 characters.
                                        </FieldDescription>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter new password"
                                        autoComplete="off"
                                        type="password"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="confirmNewPassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="w-full">
                                    <FieldContent>
                                        <FieldLabel>
                                            Confirm New Password
                                        </FieldLabel>
                                    </FieldContent>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Confirm password"
                                        autoComplete="off"
                                        type="password"
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
                    <Button type="submit" form="form-rhf-staff-role-change">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
        </div>
    )
}
