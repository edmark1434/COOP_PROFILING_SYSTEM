import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {OverviewCard} from "@/components/ui/overview-card";
import admin from "@/routes/admin";
import {LoanRow} from "@/components/rows/loan";
import * as React from "react";
import {AccountRow} from "@/components/rows/account";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Accounts',
        href: admin.accounts().url
    },
];

export default function AdminAccounts() {
    const accounts = [
        {
            type: "Asset",
            title: "Coop Cash",
            amount: "₱ 5,125.00"
        },
        {
            type: "Asset",
            title: "Loan Receivable",
            amount: "₱ 15,000.00"
        },
        {
            type: "Personal Loan",
            title: "Dividends Payable",
            amount: "₱ 8,500.00"
        },
        {
            type: "Income",
            title: "Interest Income",
            amount: "₱ 25,000.00"
        },
        {
            type: "Equity",
            title: "Share Capital Total",
            amount: "₱ 50,000.00"
        },
        {
            type: "Equity",
            title: "Retained Earnings",
            amount: "₱ 50,000.00"
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {accounts.map((item, i) => (
                            <AccountRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
