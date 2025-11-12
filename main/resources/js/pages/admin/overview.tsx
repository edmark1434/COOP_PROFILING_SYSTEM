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
import admin from "@/routes/admin";
import {TabbedTable} from "@/components/tabbed-table";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: admin.overview().url
    },
];

export default function AdminOverview() {
    let stats;
    const overviewCards = [
        { title: 'Members', value: '000', description: '+3 more today' },
        { title: 'Share Capital', value: '000', description: '+3 more today'},
        { title: 'Active Loans', value: '000', description: '+3 more today' },
        { title: 'Transactions', value: '000', description: '+3 more today' },
    ];
    const transactions = [
        {
            type: "Loan Payment",
            date: "October 4, 2025 · 1:32 PM",
            member: "Jodeci Abria Pacibe",
            processedBy: "Dan Bejec",
            amount: "₱ 5,125.00"
        },
        {
            type: "Loan Disbursement",
            date: "October 1, 2025 · 1:30 PM",
            member: "Jodeci Abria Pacibe",
            processedBy: "Dan Bejec",
            amount: "₱ 50,000.00"
        },
        {
            type: "Share Capital Contribution",
            date: "September 29, 2025 · 12:00 PM",
            member: "Jodeci Abria Pacibe",
            processedBy: "Dan Bejec",
            amount: "₱ 35,000.00"
        }
    ];
    const loans = [
        {
            initial: "JP",
            type: "Educational Loan",
            status: "Ongoing",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 5,125.00"
        },
        {
            initial: "JP",
            type: "Housing Loan",
            status: "Ongoing",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 15,000.00"
        },
        {
            initial: "JP",
            type: "Personal Loan",
            status: "Ongoing",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 8,500.00"
        },
        {
            initial: "JP",
            type: "Car Loan",
            status: "Ongoing",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 25,000.00"
        },
        {
            initial: "JP",
            type: "Business Loan",
            status: "Ongoing",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 50,000.00"
        },
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
                <div className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min dark:border-sidebar-border">
                    <TabbedTable
                        variant="bordered"
                        defaultTab="transactions"
                        tabs={[
                            {
                                value: "loans",
                                label: "Loans",
                                data: loans
                            },
                            {
                                value: "transactions",
                                label: "Transactions",
                                data: transactions
                            },
                        ]}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
