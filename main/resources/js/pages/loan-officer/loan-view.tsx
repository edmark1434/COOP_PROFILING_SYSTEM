import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import * as React from "react";
import {ProfileCard} from "@/components/ui/profile-card";
import loanOfficer, { loanRejectionForm } from "@/routes/loan-officer";
import {Button} from "@/components/ui/button";

interface Member {
    id: number;
    first_name: string;
    middle_name?: string;
    last_name: string;
    suffix?: string;
    email?: string;
    contact_num?: string;
    id_coop?: string;
    share_capital?: number;
    join_date?: string;
    account_status?: string; // This comes from Account model, not Member model
}

interface Purpose {
    id: number;
    name: string;
}

interface Loan {
    id: number;
    ref_no: string;
    amount: number;
    interest_rate: number;
    term_months: number;
    status: string;
    remarks?: string;
    created_at: string;
    member: Member;
    purpose: Purpose;
}

interface LoanViewProps {
    loan: Loan;
}

export default function LoanView({ loan }: LoanViewProps) {
    const getInitials = (firstName: string, lastName: string) => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatCurrency = (amount: number) => {
        return `₱ ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const member = {
        initial: getInitials(loan.member.first_name, loan.member.last_name),
        id: loan.member.id.toString(),
        member: `${loan.member.first_name} ${loan.member.middle_name ? loan.member.middle_name + ' ' : ''}${loan.member.last_name}${loan.member.suffix ? ' ' + loan.member.suffix : ''}`,
        rate: "90", // You'll need to add this to your member model if needed
        shareCapital: formatCurrency(loan.member.share_capital || 0),
        dateJoined: loan.member.join_date ? formatDate(loan.member.join_date) : 'N/A',
        email: loan.member.email || 'N/A',
        contact: loan.member.contact_num || 'N/A',
        status: loan.member.account_status || 'N/A',
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Loan Applications',
            href: loanOfficer.overview().url
        },
        {
            title: loan.ref_no,
            href: `/loan-officer/loans/${loan.id}`
        },
    ];

    const handleApprove = () => {
        if (confirm('Are you sure you want to approve this loan?')) {
            router.post(`/loan-officer/loans/${loan.id}/approve`, {}, {
                onSuccess: () => {
                    // Redirect to loan applications page after success
                },
                onError: (errors) => {
                    console.error('Error approving loan:', errors);
                }
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Loan ${loan.ref_no}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col items-center w-full gap-5">
                    {/*Details Card*/}
                    <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                        <div className="flex flex-col p-5 py-2.5 border-b">
                            <div className="text-sm font-medium text-(--color-primary)">Details</div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Date Applied</p>
                                    <p className="text-sm font-semibold text-primary">
                                        {formatDate(loan.created_at)}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Purpose</p>
                                    <p className="text-sm font-semibold text-primary">
                                        {loan.purpose.name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Amount</p>
                                    <p className="text-sm font-semibold text-primary">
                                        {formatCurrency(loan.amount)}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Plan</p>
                                    <p className="text-sm font-semibold text-primary">
                                        {loan.term_months} months, {loan.interest_rate}% interest
                                    </p>
                                </div>
                            </div>
                        </div>
                        {loan.remarks && (
                            <div className="flex flex-col p-5 pt-0">
                                <p className="text-xs text-muted-foreground">Remarks</p>
                                <p className="text-sm font-semibold text-primary">{loan.remarks}</p>
                            </div>
                        )}
                    </div>
                    <ProfileCard title="Transactor" type="member" data={member} className="w-[50%]"/>
                    <div className="flex flex-row w-[50%] justify-between">
                        <Button variant="secondary" onClick={handleApprove}>
                            Approve
                        </Button>
                        <Link href={loanRejectionForm(loan.id)}>
                        <Button variant="destructive" >
                            Reject
                        </Button>
                    </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
