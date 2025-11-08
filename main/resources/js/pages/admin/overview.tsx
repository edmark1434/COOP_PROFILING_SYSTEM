import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
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
import auditLogs from "@/routes/audit-logs";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: admin.overview().url
    },
];

export default function AdminOverview() {
    let stats;
    const overviewCards = [
        { title: 'Total Members', value: '000', description: '+3 more today' },
        { title: 'Total Loans', value: '000', description: '+3 more today'},
        { title: 'Active Accounts', value: '000', description: '+3 more today' },
        { title: 'Staff Count', value: '000', description: '+3 more today' },
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
            type: "Personal Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 8,500.00"
        },
        {
            initial: "JP",
            type: "Car Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 25,000.00"
        },
        {
            initial: "JP",
            type: "Business Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 50,000.00"
        },
    ];
    const staff = [
        {
            initial: "JP",
            type: "Teller",
            member: "Jodeci Abria Pacibe",
        },
        {
            initial: "JP",
            type: "Loan Officer",
            member: "Jodeci Abria Pacibe",
        },
        {
            initial: "JP",
            type: "Teller",
            member: "Jodeci Abria Pacibe",
        },
        {
            initial: "JP",
            type: "Loan Officer",
            member: "Jodeci Abria Pacibe",
        },
        {
            initial: "JP",
            type: "Teller",
            member: "Jodeci Abria Pacibe",
        },
    ];
    const auditLogs = [
        {
            description: "Recorded a Transaction",
            type: "Loan Payment",
            id: "12342342",
            time: "2:02 PM",
            date: "October 23, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Loan Disbursement",
            id: "12342343",
            time: "10:15 AM",
            date: "October 21, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Share Capital Contribution",
            id: "12342344",
            time: "1:30 PM",
            date: "October 20, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Loan Payment",
            id: "12342345",
            time: "3:45 PM",
            date: "October 18, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Educational Loan Payment",
            id: "12342346",
            time: "11:00 AM",
            date: "October 15, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Loan Disbursement",
            id: "12342347",
            time: "4:20 PM",
            date: "October 12, 2025",
        }
    ];
    const installments = [
        {
            status: "Pending",
            badgeType: "secondary",
            amount: "₱ 50,000.00",
            date: "October 23, 2025",
        },
        {
            status: "Paid",
            badgeType: "outline",
            amount: "₱ 5,000.00",
            date: "October 20, 2025",
        },
        {
            status: "Pending",
            badgeType: "secondary",
            amount: "₱ 10,000.00",
            date: "October 18, 2025",
        },
        {
            status: "Overdue",
            badgeType: "destructive",
            amount: "₱ 7,500.00",
            date: "October 15, 2025",
        },
        {
            status: "Paid",
            badgeType: "outline",
            amount: "₱ 12,500.00",
            date: "October 12, 2025",
        },
        {
            status: "Pending",
            badgeType: "secondary",
            amount: "₱ 15,000.00",
            date: "October 10, 2025",
        }
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
                                value: "staff",
                                label: "Staff",
                                data: staff
                            },
                            {
                                value: "transactions",
                                label: "Transactions",
                                data: transactions
                            },
                            {
                                value: "auditLogs",
                                label: "Audit Logs",
                                data: auditLogs
                            },
                            {
                                value: "installments",
                                label: "Installments",
                                data: installments
                            },
                        ]}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
