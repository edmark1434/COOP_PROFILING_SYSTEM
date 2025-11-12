import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as React from "react";
import {ProfileCard} from "@/components/ui/profile-card";
import loanOfficer from "@/routes/loan-officer";
import {Button} from "@/components/ui/button";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Loan/ID',
        href: loanOfficer.loanView().url
    },
];

export default function LoanView() {
    const member = {
        initial: "JP",
        id: "1231231",
        member: "Jodeci Abria Pacibe",
        rate: "90",
        shareCapital: "₱ 5,125.00",
        dateJoined: "October 12, 2023",
        email: "1234@gmail.com",
        contact: "0912345123",
        status: "Active",
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="ID" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col items-center w-full gap-5">
                    {/*Details Card*/}
                    <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                        <div className="flex flex-col p-5 py-2.5 border-b">
                            <div className="text-sm font-medium text-(--color-primary)">Details</div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Date Applied</p>
                                    <p className="text-sm font-semibold text-primary">March 2, 2025</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Purpose</p>
                                    <p className="text-sm font-semibold text-primary">Medical</p>
                                </div>
                            </div>
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Amount</p>
                                    <p className="text-sm font-semibold text-primary">₱ 12,000.00</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Plan</p>
                                    <p className="text-sm font-semibold text-primary">12 months, 5% interest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileCard title="Transactor" type="member" data={member} className="w-[50%]"/>
                    <div className="flex flex-row w-[50%] justify-between">
                        <Button variant="secondary">Approve</Button>
                        <Button variant="destructive">Reject</Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
