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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { X } from "lucide-react"
import {router, usePage} from "@inertiajs/react";

const formSchema = z.object({
    role: z
        .string()
        .min(1, "Choose a staff role"),
})

const roles = [
    "Teller",
    "Loan Officer",
    "Administrator",
] as const

export default function StaffRoleChangeForm() {
    const { staff } = usePage<{
        staff: { name: string, initials: string, role: string };
    }>().props

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role: staff.role,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        router.post(window.location.pathname, data, {
            onSuccess: () => {
                toast.success("Staff role changed.")
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
                <CardTitle>Change Staff Role</CardTitle>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </CardHeader>
            <CardContent className="px-10 flex flex-col gap-4">
                <div className="flex min-w-[200px] items-center gap-4">
                    <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                        <p className="font-semibold text-sm">
                            {staff.initials}
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-sm">
                            {staff.name}
                        </p>
                    </div>
                </div>
                <form id="form-rhf-staff-role-change" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
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
                    <Button type="submit" form="form-rhf-staff-role-change">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
        </div>
    )
}
