import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import {
    OverviewCard,
    OverviewCardContent,
    OverviewCardFooter,
    OverviewCardHeader,
    OverviewCardTitle, 
    OverviewCardValue,
} from "@/components/ui/overview-card";

import * as React from "react";
import { TransactionRow } from "@/components/rows/transaction";
import teller from "@/routes/teller";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: teller.overview().url
    },
];

interface TellerTransaction {
    id: number;
    type: string;
    date: string;
    member: string;
    amount: string;
    raw_amount: number;
}

interface TellerOverviewProps {
    transactionsThisWeek: number;
    transactionDescription: string;
    cashOnHand: string;
    startingCash: string;
    cashInThisWeek: string;
    cashInDescription: string;
    cashOutThisWeek: string;
    cashOutDescription: string;
    weekTransactions: TellerTransaction[];
    weekTransactionCount: number;
    weekRange: string;
}

export default function TellerOverview({ 
    transactionsThisWeek,
    transactionDescription,
    cashOnHand,
    startingCash,
    cashInThisWeek,
    cashInDescription,
    cashOutThisWeek,
    cashOutDescription,
    weekTransactions,
    weekTransactionCount,
    weekRange
}: TellerOverviewProps) {
    
    const overviewCards = [
        { 
            title: 'Transactions This Week', 
            value: transactionsThisWeek.toString(), 
            description: transactionDescription 
        },
        { 
            title: 'Cash On Hand', 
            value: cashOnHand, 
            description: `Started at ${startingCash} today` 
        },
        { 
            title: 'Total Cash In', 
            value: cashInThisWeek, 
            description: cashInDescription 
        },
        { 
            title: 'Total Cash Out', 
            value: cashOutThisWeek, 
            description: cashOutDescription 
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Overview" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Overview Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {overviewCards.map((card, index) => (
                        <OverviewCard key={index}>
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

                {/* Transactions (This Week's) */}
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="flex flex-col px-4 py-2 border-b bg-muted/40">
                        <div className="text-sm font-medium text-primary">Transactions</div>
                        <div className="text-xs text-muted-foreground mt-1">
                            This week's transactions ({weekTransactionCount} total) - {weekRange}
                        </div>
                    </div>
                    <div className="divide-y h-fit">
                        {weekTransactions.length > 0 ? (
                            weekTransactions.map((transaction) => (
                                <TransactionRow 
                                    key={transaction.id} 
                                    data={{
                                        id: transaction.id,
                                        type: transaction.type,
                                        amount: transaction.raw_amount,
                                        created_at: transaction.date,
                                        date: transaction.date,
                                        member_name: transaction.member,
                                    }}
                                    variant="teller"
                                />
                            ))
                        ) : (
                            <div className="p-8 text-center text-muted-foreground">
                                No transactions found for this week
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}