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

export default function ConfirmTransaction() {

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <Card className="w-full sm:max-w-md">
            <CardHeader className="px-10 pt-4 flex flex-row justify-between items-center">
                <CardTitle>Confirm Transaction</CardTitle>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </CardHeader>
            <CardContent className="px-10 flex flex-col gap-4">
                <div className="flex-1 min-w-[200px]">
                    <p className="text-xs text-muted-foreground">
                        Transaction Type
                    </p>
                    <p className="font-medium text-sm">
                        Loan Disbursement
                    </p>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <p className="text-xs text-muted-foreground">
                        Member Name
                    </p>
                    <p className="font-medium text-sm">
                        Jodeci Pacibe
                    </p>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <p className="text-xs text-muted-foreground">
                        Transaction Amount
                    </p>
                    <p className="font-medium text-sm">
                        ₱ 23,232.00
                    </p>
                </div>
            </CardContent>
            <CardFooter className="px-10 pb-4">
                <Button className="w-full">
                    Confirm
                </Button>
            </CardFooter>
        </Card>
        </div>
    )
}
