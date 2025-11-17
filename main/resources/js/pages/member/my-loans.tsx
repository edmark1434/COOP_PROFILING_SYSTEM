import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import * as React from "react";
import member from "@/routes/member";
import { Badge } from "@/components/ui/badge";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Loans',
        href: member.myLoans().url
    },
];

interface LoanData {
    id: string | number;
    member: {
        first_name: string;
        middle_name?: string;
        last_name: string;
        suffix?: string;
    };
    status?: string;
    type?: string;
    amount: string;
    purpose: {
        name: string;
    };
    remarks?: string;
    application_date?: string;
    completion_date?: string;
}

interface PageProps {
    currentLoans: LoanData[];
    previousLoans: LoanData[];
    [key: string]: any;
}

export default function MemberLoans() {
    const { props } = usePage<PageProps>();
    const { currentLoans = [], previousLoans = [] } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Loans" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex w-full flex-col gap-2">
                    <p className="font-medium text-sm">Current</p>
                    <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="divide-y h-fit">
                            {currentLoans.length > 0 ? (
                                currentLoans.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="flex justify-between items-center px-4 py-3 hover:bg-muted/40 transition-colors"
                                    >
                                        {/* Current Loans: Loan type + Status with badge */}
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-sm">
                                                {item.purpose?.name || item.type || 'General Loan'}
                                            </p>
                                            {item.status && (
                                                <Badge 
                                                    variant="secondary" 
                                                    className="w-fit text-xs capitalize"
                                                >
                                                    {item.status.toLowerCase()}
                                                </Badge>
                                            )}
                                        </div>
                                        {/* Amount on the right */}
                                        <div className="text-right font-semibold text-sm">
                                            ₱ {item.amount}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-muted-foreground">
                                    No current loans found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                    <p className="font-medium text-sm">Previous</p>
                    <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="divide-y h-fit">
                            {previousLoans.length > 0 ? (
                                previousLoans.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="flex justify-between items-center px-4 py-3 hover:bg-muted/40 transition-colors"
                                    >
                                        {/* Previous Loans: Loan type + Date (no badge) */}
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-sm">
                                                {item.purpose?.name || item.type || 'General Loan'}
                                            </p>
                                            {item.application_date && (
                                                <p className="text-xs text-muted-foreground">
                                                    {item.application_date}
                                                </p>
                                            )}
                                        </div>
                                        {/* Amount on the right */}
                                        <div className="text-right font-semibold text-sm">
                                            ₱ {item.amount}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-muted-foreground">
                                    No previous loans found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}