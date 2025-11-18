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
import loanOfficer from "@/routes/loan-officer";
import * as React from "react";
import { cn } from "@/lib/utils";

// Simplified LoanRow component without status
function LoanRow({ data, className, ...props }: any) {
    const getInitials = (name: string) => {
        const names = name.split(" ");
        const initials = names.map((n) => n.charAt(0).toUpperCase());
        return initials.join("");
    };

    return (
        <div
            className={cn(
                "flex flex-row gap-4 items-center px-4 py-3 hover:bg-muted/40 transition-colors",
                className
            )}
            {...props}
        >
            {/* Member initials */}
            <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center flex-shrink-0">
                <p className="font-semibold text-sm">
                    {getInitials(
                        (data?.member?.first_name ?? "") +
                        " " +
                        (data?.member?.last_name ?? "")
                    )}
                </p>
            </div>

            {/* Member info - name and purpose */}
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">
                    {data?.member?.first_name} {data?.member?.middle_name ?? ""}{" "}
                    {data?.member?.last_name} {data?.member?.suffix ?? ""}
                </p>
                <p className="text-xs text-muted-foreground">
                    {data?.purpose?.name}
                </p>
            </div>

            {/* Amount */}
            <div className="text-right font-semibold text-sm min-w-[100px] flex-shrink-0">
                ₱ {Number(data?.amount ?? 0).toLocaleString("en-US")}
            </div>
        </div>
    );
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: loanOfficer.overview().url
    },
];

interface Loan {
    id: number;
    member: {
        first_name: string;
        middle_name?: string;
        last_name: string;
        suffix?: string;
    };
    purpose: {
        name: string;
    };
    amount: number;
    status?: string;
    remarks?: string;
}

interface Stats {
    pending: {
        count: number;
        thisWeek: number;
    };
    approved: {
        count: number;
        thisWeek: number;
    };
    ongoing: {
        count: number;
        thisWeek: number;
    };
    overdue: {
        count: number;
        thisWeek: number;
    };
}

interface LoanOfficerOverviewProps {
    stats: Stats;
    recentApplications: Loan[];
    activeLoans: Loan[];
}

export default function LoanOfficerOverview({ stats, recentApplications, activeLoans }: LoanOfficerOverviewProps) {
    const overviewCards = [
        {
            title: 'Pending Loans',
            value: stats.pending.count.toString(),
            description: `+${stats.pending.thisWeek} ${stats.pending.thisWeek === 1 ? 'application' : 'applications'} this week`
        },
        {
            title: 'Approved Loans',
            value: stats.approved.count.toString(),
            description: `+${stats.approved.thisWeek} ${stats.approved.thisWeek === 1 ? 'approval' : 'approvals'} this week`
        },
        {
            title: 'Ongoing Loans',
            value: stats.ongoing.count.toString(),
            description: `+${stats.ongoing.thisWeek} ${stats.ongoing.thisWeek === 1 ? 'loan' : 'loans'} this week`
        },
        {
            title: 'Overdue Loans',
            value: stats.overdue.count.toString(),
            description: `+${stats.overdue.thisWeek} ${stats.overdue.thisWeek === 1 ? 'loan' : 'loans'} this week`
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Overview" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
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
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="flex flex-col px-4 py-2 border-b">
                        <div className="text-sm font-medium text-(--color-primary)">Loan Applications</div>
                    </div>
                    <div className="divide-y h-fit">
                        {recentApplications.length > 0 ? (
                            recentApplications.map((loan) => (
                                <LoanRow key={loan.id} data={loan} />
                            ))
                        ) : (
                            <div className="text-sm text-center py-8 text-muted-foreground">
                                No loan applications found
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="flex flex-col px-4 py-2 border-b">
                        <div className="text-sm font-medium text-(--color-primary)">Active Loans</div>
                    </div>
                    <div className="divide-y h-fit">
                        {activeLoans.length > 0 ? (
                            activeLoans.map((loan) => (
                                <LoanRow key={loan.id} data={loan} />
                            ))
                        ) : (
                            <div className="text-sm text-center py-8 text-muted-foreground">
                                No active loans found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
