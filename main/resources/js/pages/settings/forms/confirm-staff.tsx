"use client"

import * as React from "react"
import { toast, Toaster } from "sonner"
import { router } from "@inertiajs/react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {FingerprintIcon, X} from "lucide-react"

export default function ConfirmStaff() {

    async function onScan() {
                try{
                    const response = await fetch("http://localhost:8080/api/biometric/verifying/1",{method:"POST"})
                    if(!response.ok){
                        const errorMessage = await response.text();
                        toast.error("Fingerprint scan failed: " + errorMessage, {
                            position: "bottom-right",
                            classNames: {
                                content: "flex flex-col gap-2",
                            },
                            style: {
                                "--border-radius": "calc(var(--radius) + 4px)",
                                color: "var(--destructive)",
                            } as React.CSSProperties,
                        });
                    }else{
                        const success = await response.text();
                        toast.success(success);
                        router.post(window.location.pathname);
                    }
                }catch(error){
                    toast.error("Fingerprint scan failed: " + error, {
                        position: "bottom-right",
                        classNames: {
                            content: "flex flex-col gap-2",
                        },
                        style: {
                            "--border-radius": "calc(var(--radius) + 4px)",
                            color: "var(--destructive)",
                        } as React.CSSProperties,
                    });
                }

            }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <Toaster/>
            <Card className="w-full sm:max-w-md">
            <CardHeader className="px-10 pt-4 flex flex-row justify-between items-center">
                <CardTitle>Confirm Staff</CardTitle>
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
            <CardFooter className="px-10 pt-2 pb-4">
                <Button className="w-full" onClick={onScan}>
                    <FingerprintIcon className="mr-2 h-4 w-4" />
                    Scan fingerprint
                </Button>
            </CardFooter>
        </Card>
        </div>
    )
}
