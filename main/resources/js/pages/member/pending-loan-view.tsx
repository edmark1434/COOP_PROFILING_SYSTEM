import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as React from "react";
import { ProfileCard } from "@/components/ui/profile-card";

interface PendingLoanViewProps {
    prop: {
        id: number;
        name: string;
        memId: number;
        memStatus: string;
    };
    loanDetail: {
        id: number;
        ref_no: string;
        amount: number;
        interest_rate: number;
        term_months: number;
        status: string;
        remarks?: string;
        created_at: string;
        purpose: {
            id: number;
            name: string;
        };
    };
    member: {
        id: string;
        shareCapital: number;
        dateJoined: string;
        email: string;
        contact: string;
        status: string;
        initial: string;
        delinquency_rate: number;
        processedBy?: string;
    };
}

export default function PendingLoanView({ prop, loanDetail, member }: PendingLoanViewProps) {
    console.log(prop.name);
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatCurrency = (amount: any) => {
        if (amount === null || amount === undefined) {
            return `₱ 0.00`;
        }

        const num = typeof amount === 'number' ? amount : parseFloat(amount);

        if (isNaN(num)) {
            return `₱ 0.00`;
        }

        return `₱ ${num.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };

    // Check if delinquency rate is high (>= 10%)
    const delinquencyRate = member.delinquency_rate || 0;
    const isHighRisk = delinquencyRate >= 10;

    // Check if loan is rejected
    const isRejected = loanDetail.status.toLowerCase() === 'rejected';

    const memberData = {
        initial: member.initial,
        id: member.id,
        name: prop.name || "N / A",
        rate: delinquencyRate.toString(),
        rateClassName: isHighRisk ? 'text-red-600' : '',
        shareCapital: member.shareCapital || 0,
        dateJoined: member.dateJoined ? formatDate(member.dateJoined) : 'N/A',
        email: member.email || 'N/A',
        contact: member.contact || 'N/A',
        status: member.status || 'N/A',
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'My Loans',
            href: '/member/my-loans'
        },
        {
            title: loanDetail.ref_no,
            href: `/member/loans/${prop.id}/pending`
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Loan ${loanDetail.ref_no}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col items-center w-full gap-5">
                    {/* Details Card */}
                    <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-full lg:w-[50%]">
                        <div className="flex flex-col p-5 py-2.5 border-b">
                            <div className="text-sm font-medium text-foreground">Details</div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Status</p>
                                    <p className={`text-sm font-semibold ${isRejected ? 'text-red-600' : 'text-foreground'}`}>
                                        {loanDetail.status}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">
                                        {isRejected ? 'Date Rejected' : 'Date Applied'}
                                    </p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {formatDate(loanDetail.created_at)}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Purpose</p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {loanDetail.purpose.name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Amount</p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {formatCurrency(loanDetail.amount)}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Plan</p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {loanDetail.term_months} Months, {loanDetail.interest_rate}% interest
                                    </p>
                                </div>
                                {isRejected && member.processedBy && (
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Processed By</p>
                                        <p className="text-sm font-semibold text-foreground">
                                            {member.processedBy}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {loanDetail.remarks && (
                            <div className="flex flex-col p-5 pt-0 border-t mt-3">
                                <p className="text-xs text-muted-foreground">Remarks</p>
                                <p className="text-sm font-semibold text-foreground">{loanDetail.remarks}</p>
                            </div>
                        )}
                    </div>

                    {/* Profile Card */}
                    <ProfileCard
                        title="Transactor"
                        type="member-loan"
                        data={memberData}
                        className="w-full lg:w-[50%]"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
