import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import {
    OverviewCard,
    OverviewCardContent,
    OverviewCardFooter,
    OverviewCardHeader,
    OverviewCardTitle, OverviewCardValue,
} from "@/components/ui/overview-card";

import * as React from "react";
import {TransactionRow} from "@/components/rows/transaction";
import teller from "@/routes/teller";
import {AuditLogRow} from "@/components/rows/audit-log";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: teller.overview().url
    },
];

export default function TellerOverview() {
    let stats;
    const overviewCards = [
        { title: 'Transactions Today', value: '000', description: 'with 32.1% on share capital contributions' },
        { title: 'Cash On Hand', value: '000', description: 'Started at ₱64,350.00 today'},
        { title: 'Total Cash In', value: '000', description: 'with 54.2% from loan payments' },
        { title: 'Total Cash Out', value: '000', description: 'from 6 loan disbursements' },
    ];
    const transactions = [
        {
            type: "Loan Payment",
            date: "October 4, 2025 · 1:32 PM",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 5,125.00"
        },
        {
            type: "Loan Disbursement",
            date: "October 1, 2025 · 1:30 PM",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 50,000.00"
        },
        {
            type: "Share Capital Contribution",
            date: "September 29, 2025 · 12:00 PM",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 35,000.00"
        }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Overview" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    {overviewCards.map((card, index) => (
                        <OverviewCard>
                            <OverviewCardHeader>
                                <OverviewCardTitle>{card.title}</OverviewCardTitle>
                            </OverviewCardHeader>
                            <OverviewCardContent>
                                <OverviewCardValue>{card.value}</OverviewCardValue>
                                <OverviewCardFooter>{card.description}</OverviewCardFooter>
                            </OverviewCardContent>
                        </OverviewCard>
                    ))}
                </div>
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="flex flex-col px-4 py-2 border-b">
                        <div className="text-sm font-medium text-(--color-primary)">Transactions</div>
                    </div>
                    <div className="divide-y h-fit">
                        {transactions.map((item, i) => (
                            <TransactionRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
