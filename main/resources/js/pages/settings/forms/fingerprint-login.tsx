"use client"

import * as React from "react"
import { toast, Toaster } from "sonner"
import { Link, router, usePage } from "@inertiajs/react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {FingerprintIcon, KeyRound, LoaderCircle, X} from "lucide-react"
import AuthLayout from '@/layouts/auth-layout';

export default function FingerprintLogin() {
    const [processing, setProcessing] = React.useState(false);

    async function onScan() {
        setProcessing(true);
        try{
            const response = await fetch('http://localhost:8080/api/biometric/identify', { method: "POST" });
            if(!response.ok){
                const errorMessage = await response.text();
                toast.error(errorMessage, {
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
                const id = await response.text();
                toast.success("Logged in successfully!");
                router.post(window.location.pathname, {id});
            }
        }catch(error){
            toast.error("Fingerprint scan failed: " + error);
        } finally {
            setProcessing(false);
        }
    }

    return (
        <AuthLayout
                    title="Log in to your account"
                    description="Choose a method to log in to your account"
        >
            <Toaster />
            <Button className="w-full" onClick={onScan} disabled={processing}>
                {processing ?
                    <LoaderCircle className="h-4 w-4 animate-spin" /> :
                    <FingerprintIcon className="mr-2 h-4 w-4"/>}
                {processing ? "Place your finger on the scanner" : "Log in with fingerprint"}
            </Button>
            <Link href="/login-with-password">
                <Button variant="secondary" className="w-full mt-4">
                        <KeyRound className="mr-2 h-4 w-4" />
                        Log in with password
                </Button>
            </Link>
        </AuthLayout>
    )
}
