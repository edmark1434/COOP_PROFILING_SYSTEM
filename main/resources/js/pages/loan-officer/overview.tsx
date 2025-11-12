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
import loanOfficer from "@/routes/loan-officer";
import * as React from "react";
import {LoanRow} from "@/components/rows/loan";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: loanOfficer.overview().url
    },
];

export default function LoanOfficerOverview() {
    let stats;
    const overviewCards = [
        { title: 'Pending Loans', value: '000', description: '+3 more today' },
        { title: 'Approved Loans', value: '000', description: '+3 more today'},
        { title: 'Ongoing Loans', value: '000', description: '+3 more today' },
        { title: 'Overdue Loans', value: '000', description: '+3 more today' },
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
            <Head title="Dashboard" />
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
                        <div className="text-sm font-medium text-(--color-primary)">Loan Applications</div>
                    </div>
                    <div className="divide-y h-fit">
                        {loans.map((item, i) => (
                            <LoanRow key={i} data={item} />
                        ))}
                    </div>
                </div>
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="flex flex-col px-4 py-2 border-b">
                        <div className="text-sm font-medium text-(--color-primary)">Active Loans</div>
                    </div>
                    <div className="divide-y h-fit">
                        {loans.map((item, i) => (
                            <LoanRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
