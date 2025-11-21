"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { X } from "lucide-react"
import {Toaster} from "sonner";
import {router,usePage, Link} from "@inertiajs/react";

export default function ConfirmTransaction() {
    const { data, memberName } = usePage<{
        data: { type: string, member: number, amount: number };
        memberName: string;
    }>().props

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <Toaster/>
            <Card className="w-full sm:max-w-md">
            <CardHeader className="px-10 pt-4 flex flex-row justify-between items-center">
                <CardTitle>Confirm Transaction</CardTitle>
                <Link href="/teller/add-transaction">
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
                </Link>
            </CardHeader>
            <CardContent className="px-10 flex flex-col gap-4">
                <div className="flex-1 min-w-[200px]">
                    <p className="text-xs text-muted-foreground">
                        Transaction Type
                    </p>
                    <p className="font-medium text-sm">
                        {data.type}
                    </p>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <p className="text-xs text-muted-foreground">
                        Member Name
                    </p>
                    <p className="font-medium text-sm">
                        {memberName}
                    </p>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <p className="text-xs text-muted-foreground">
                        Transaction Amount
                    </p>
                    <p className="font-medium text-sm">
                        ₱ {data.amount}.00
                    </p>
                </div>
            </CardContent>
            <CardFooter className="px-10 pt-2 pb-4">
                <Button className="w-full" onClick={() => router.get("/teller/confirm-member")}>
                    Confirm
                </Button>
            </CardFooter>
        </Card>
        </div>
    )
}
