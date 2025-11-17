import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import admin from "@/routes/admin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Simplified LoanRow component - ONLY initial, name, purpose, amount
function LoanRow({ data, className, ...props }: any) {
    const getInitials = (name: string) => {
        const names = name.split(" ");
        const initials = names.map((n) => n.charAt(0).toUpperCase());
        return initials.join("");
    };

    return (
        <div
            data-slot="loan-row"
            className={cn(
                "flex flex-row gap-4 items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors",
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

            {/* Member info - ONLY name and purpose */}
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">
                    {data?.member?.first_name} {data?.member?.middle_name ?? ""}{" "}
                    {data?.member?.last_name} {data?.member?.suffix ?? ""}
                </p>
                <p className="text-xs text-muted-foreground">
                    {data?.purpose?.name}
                </p>
            </div>

            {/* Amount ONLY */}
            <div className="text-right font-semibold text-sm min-w-[100px] flex-shrink-0">
                ₱ {Number(data?.amount ?? 0).toLocaleString("en-US")}
            </div>
        </div>
    );
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Loans',
        href: admin.loans().url
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

interface AdminLoansProps {
    loansByStatus: {
        ongoing: Loan[];
        disbursed: Loan[];
        overdue: Loan[];
        paid: Loan[];
        pending: Loan[];
        approved: Loan[];
        rejected: Loan[];
    };
    totalResults: number;
}

export default function AdminLoans({ loansByStatus, totalResults }: AdminLoansProps) {
    const tabs = [
        { value: "loans-ongoing", label: "Ongoing", data: loansByStatus.ongoing },
        { value: "loans-disbursed", label: "Disbursed", data: loansByStatus.disbursed },
        { value: "loans-overdue", label: "Overdue", data: loansByStatus.overdue },
        { value: "loans-paid", label: "Paid", data: loansByStatus.paid },
        { value: "loans-pending", label: "Pending", data: loansByStatus.pending },
        { value: "loans-approved", label: "Approved", data: loansByStatus.approved },
        { value: "loans-rejected", label: "Rejected", data: loansByStatus.rejected },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Loans" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <Tabs defaultValue="loans-ongoing" className="w-full">
                        <TabsList>
                            {tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {tabs.map((tab) => (
                            <TabsContent key={tab.value} value={tab.value} className="m-0">
                                <div className="flex flex-col">
                                    {tab.data.map((loan) => (
                                        <LoanRow key={loan.id} data={loan} />
                                    ))}
                                    {tab.data.length === 0 && (
                                        <div className="text-sm text-center py-8 text-muted-foreground">
                                            No loans found
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </AppLayout>
    );
}
