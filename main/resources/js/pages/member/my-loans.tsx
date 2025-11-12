import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as React from "react";
import member from "@/routes/member";
import {LoanRow} from "@/components/rows/loan";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Loans',
        href: member.myLoans().url
    },
];

export default function MemberLoans() {
    const currentLoans = [
        {
            initial: "JP",
            status: "Ongoing",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 5,125.00"
        },
        {
            initial: "JP",
            status: "Pending",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 5,125.00"
        },
    ];
    const loans = [
        {
            initial: "JP",
            type: "Educational Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 5,125.00"
        },
        {
            initial: "JP",
            type: "Housing Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 15,000.00"
        },
        {
            initial: "JP",
            type: "Business Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 50,000.00"
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Transactions" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex w-full flex-col gap-2">
                    <p className="font-medium text-sm">Current</p>
                    <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="divide-y h-fit">
                            {currentLoans.map((item, i) => (
                                <LoanRow key={i} data={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                    <p className="font-medium text-sm">Previous</p>
                    <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="divide-y h-fit">
                            {loans.map((item, i) => (
                                <LoanRow key={i} data={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
