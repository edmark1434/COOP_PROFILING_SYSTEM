import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, Link } from '@inertiajs/react';
import * as React from "react";
import {ProfileCard} from "@/components/ui/profile-card";
import loanOfficer from "@/routes/loan-officer"
import {Button} from "@/components/ui/button";
import Swal from 'sweetalert2';

import loanRejectionForm from "@/routes/loan-officer/loanRejectionForm";

interface Member {
    id: number;
    name: string;
    email?: string;
    contact_num?: string;
    id_coop?: string;
    share_capital?: number | null;
    join_date?: string;
    account_status?: string;
    delinquency_rate?: number;
    initials: string;
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
    // Add this debug effect at the top of your component
    React.useEffect(() => {
        console.log('Full loan data:', loan);
        console.log('Share capital debug:', {
            raw: loan.member.share_capital,
            type: typeof loan.member.share_capital,
            asNumber: Number(loan.member.share_capital),
            isNaN: isNaN(Number(loan.member.share_capital))
        });
        console.log('Delinquency rate debug:', {
            raw: loan.member.delinquency_rate,
            type: typeof loan.member.delinquency_rate,
        });
    }, [loan]);

    const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names.map((n) => n.charAt(0).toUpperCase());
    return initials.join("");
  };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatCurrency = (amount: any) => {
        // Handle null or undefined
        if (amount === null || amount === undefined) {
            return `₱ 0.00`;
        }

        // Convert to number
        const num = typeof amount === 'number' ? amount : parseFloat(amount);

        // Check if conversion resulted in valid number
        if (isNaN(num)) {
            return `₱ 0.00`;
        }

        return `₱ ${num.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };

    // Check if delinquency rate is high (>= 10%)
    const delinquencyRate = loan.member.delinquency_rate || 0;
    const isHighRisk = delinquencyRate >= 10;

    const member = {
        initial: loan.member.initials,
        id: loan.member.id.toString(),
        name: loan.member.name,
        rate: delinquencyRate.toString(),
        rateClassName: isHighRisk ? 'text-red-600' : '',
        shareCapital: loan.member.share_capital || 0,
        dateJoined: loan.member.join_date ? formatDate(loan.member.join_date) : 'N/A',
        email: loan.member.email || 'N/A',
        contact: loan.member.contact_num || 'N/A',
        status: loan.member.account_status || 'N/A',
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Loan Applications',
            href: loanOfficer.loanApplications().url
        },
        {
            title: loan.ref_no,
            href: `/loan-officer/loans/${loan.id}`
        },
    ];

    const handleApprove = () => {
        Swal.fire({
            title: 'Approve Loan?',
            text: 'Are you sure you want to approve this loan?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#600',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            customClass: {
                container: 'sweet-alert-center'
            },
            position: 'center'
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(`/loan-officer/loans/${loan.id}/approve`, {}, {
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Approved!',
                            text: 'Loan has been approved successfully.',
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            customClass: {
                                container: 'sweet-alert-center'
                            },
                            position: 'center'
                        }).then(() => {
                            // Redirect to loan applications page after success
                            router.visit(loanOfficer.loanApplications().url);
                        });
                    },
                    onError: (errors) => {
                        console.error('Error approving loan:', errors);
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to approve loan. Please try again.',
                            icon: 'error',
                            confirmButtonColor: '#3085d6',
                            customClass: {
                                container: 'sweet-alert-center'
                            },
                            position: 'center'
                        });
                    }
                });
            }
        });
    };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Loan ${loan.ref_no}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col items-center w-full gap-5">
                    {/*Details Card*/}
                    <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                        <div className="flex flex-col p-5 py-2.5 border-b">
                            <div className="text-sm font-medium text-foreground">Details</div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Date Applied</p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {formatDate(loan.created_at)}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Purpose</p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {loan.purpose.name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col p-5 gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Amount</p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {formatCurrency(loan.amount)}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs text-muted-foreground">Plan</p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {loan.term_months} months, {loan.interest_rate}% interest
                                    </p>
                                </div>
                            </div>
                        </div>
                        {loan.remarks && (
                            <div className="flex flex-col p-5 pt-0">
                                <p className="text-xs text-muted-foreground">Remarks</p>
                                <p className="text-sm font-semibold text-foreground">{loan.remarks}</p>
                            </div>
                        )}
                    </div>

                    <ProfileCard title="Transactor" type="member-loan" data={member} className="w-[50%]"/>
                    <div className="flex flex-row w-[50%] justify-between">
                        <Button variant="secondary" onClick={handleApprove}>
                            Approve
                        </Button>
                        <Link href={loanRejectionForm.get(loan.id)}>
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
