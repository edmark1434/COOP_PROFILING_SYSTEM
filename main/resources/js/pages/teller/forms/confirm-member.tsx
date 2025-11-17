"use client"

import * as React from "react"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {FingerprintIcon, X} from "lucide-react"

export default function ConfirmTransaction() {

    function onScan() {
        toast.error("Fingerprint did not match", {
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
                "color": "var(--destructive)",
            } as React.CSSProperties,
        })
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <Toaster position="bottom-right" />
            <Card className="w-full sm:max-w-md">
            <CardHeader className="px-10 pt-4 flex flex-row justify-between items-center">
                <CardTitle>Confirm Member</CardTitle>
                <Button variant="outline" size="icon" className="rounded-full">
                    <X />
                </Button>
            </CardHeader>
            <CardContent className="px-10 flex flex-col gap-4">
                <div className="flex min-w-[200px] items-center gap-4">
                    <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                        <p className="font-semibold text-sm">
                            JP
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-sm">
                            Jodeci Pacibe
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-10 pb-4">
                <Button className="w-full" onClick={onScan}>
                    <FingerprintIcon className="mr-2 h-4 w-4" />
                    Scan fingerprint
                </Button>
            </CardFooter>
        </Card>
        </div>
    )
}
