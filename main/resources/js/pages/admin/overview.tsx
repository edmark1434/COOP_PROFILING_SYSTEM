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
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: admin.overview().url
    },
];
interface AdminOverviewProps {
    memberCount: number,
    loanCount: number,
    transactionCount:number,
    loans : any[],
    shareCapital: number,
    transactions: any[],
    newMembersToday: number,
    newLoanToday: number,
    newTransactionToday: number,
    newShareCapitalToday: number,
}
export default function AdminOverview({memberCount,loanCount,transactionCount,loans,
    shareCapital,transactions, newMembersToday, newLoanToday, newTransactionToday,newShareCapitalToday
}: AdminOverviewProps) {
    let stats;
    const overviewCards = [
        { title: 'Total Members', value: memberCount, description: `${newMembersToday} new today` },
        { title: 'Share Capital', value: `₱ ${Number(shareCapital).toLocaleString("en-US")}`, description: `${newShareCapitalToday} new today`},
        { title: 'Active Loans', value: loanCount, description: `${newLoanToday} new today` },
        { title: 'Total Transactions', value: transactionCount, description: `${newTransactionToday} new today` },
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
