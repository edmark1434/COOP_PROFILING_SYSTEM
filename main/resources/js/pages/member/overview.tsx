import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, router } from '@inertiajs/react';
import * as React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import member from "@/routes/member";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: member.overview().url
    },
];

interface Transaction {
    id: number;
    ref_no: string;
    type: string;
    amount: number;
    created_at: string;
    created_at_raw: string;
}

interface Loan {
    id: string | number;
    type: string;
    amount: string;
    application_date: string;
    status: string;
}

// interface LoanData {
//     id: number | string;
//     member: {
//         first_name: string;
//         middle_name?: string;
//         last_name: string;
//         suffix?: string;
//     };
//     status?: string;
//     type?: string;
//     amount: string;
//     purpose: {
//         name?: string;
//     };
//     remarks?: string;
//     application_date?: string;
//     completion_date?: string;
// }

interface PageProps extends React.PropsWithChildren<Record<string, unknown>> {
    recentTransactions: Transaction[];
    currentLoans: Loan[];
    statistics: {
        total_transactions: number;
        total_amount: number;
        active_loans: number;
        total_loan_amount: number;
        delinquency_rate: number;
    };
    member: {
        first_name: string;
        middle_name?: string;
        last_name: string;
        suffix?: string;
        full_name: string;
        contact_num: string;
        status: string;
        join_date: string;
        id_coop: string;
        email: string;
        share_capital: number;
        delinquency_rate: number;
    };
}

export default function MemberOverview() {
    const { props } = usePage<PageProps>();
    const { recentTransactions = [], currentLoans = [], statistics, member: memberData } = props;

    const [localSearch, setLocalSearch] = React.useState('');
    const [localOrderBy, setLocalOrderBy] = React.useState('date');
    const [localOrderDirection, setLocalOrderDirection] = React.useState('comfortable');

    const [displayedTransactions, setDisplayedTransactions] = React.useState(recentTransactions);
    const [displayedLoans, setDisplayedLoans] = React.useState(currentLoans);

    // Format date to "November 12, 2025 · 12:01 PM"
    const formatDateTime = (dateString: string) => {
        if (!dateString) return "No date available";

        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return "Invalid date";

            const dateOptions: Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const timeOptions: Intl.DateTimeFormatOptions = {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            };

            const formattedDate = date.toLocaleDateString('en-US', dateOptions);
            const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

            return `${formattedDate} · ${formattedTime}`;
        } catch {
            return "Invalid date";
        }
    };

    const formatAmount = (amount: number) => {
        return `₱ ${Number(amount).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;
    };

    // Safe share capital formatting
    const formatShareCapital = (capital: any) => {
        const amount = Number(capital);
        if (isNaN(amount)) {
            return "₱ 0.00";
        }
        return `₱ ${amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;
    };

    const handleLoanClick = (loan: Loan) => {
        if (loan.status?.toLowerCase() === "pending") {
            router.visit(`/member/loans/${loan.id}/pending`);
        } else {
            router.visit(`/member/loan-details/${loan.id}`);
        }
    };


    React.useEffect(() => {
        let filteredTransactions = [...recentTransactions];

        if (localSearch) {
            const searchLower = localSearch.toLowerCase();
            filteredTransactions = filteredTransactions.filter(transaction =>
                transaction.type.toLowerCase().includes(searchLower) ||
                transaction.amount.toString().includes(searchLower) ||
                transaction.created_at.toLowerCase().includes(searchLower)
            );
        }

        filteredTransactions.sort((a, b) => {
            let compareA: any, compareB: any;

            switch (localOrderBy) {
                case 'date':
                    compareA = new Date(a.created_at_raw).getTime();
                    compareB = new Date(b.created_at_raw).getTime();
                    break;
                case 'type':
                    compareA = a.type.toLowerCase();
                    compareB = b.type.toLowerCase();
                    break;
                case 'amount':
                    compareA = a.amount;
                    compareB = b.amount;
                    break;
                default:
                    compareA = new Date(a.created_at_raw).getTime();
                    compareB = new Date(b.created_at_raw).getTime();
            }

            if (localOrderDirection === 'default') {
                return compareA < compareB ? -1 : compareA > compareB ? 1 : 0;
            } else {
                return compareA < compareB ? 1 : compareA > compareB ? -1 : 0;
            }
        });

        let filteredLoans = [...currentLoans];

        if (localSearch) {
            const searchLower = localSearch.toLowerCase();
            filteredLoans = filteredLoans.filter(loan =>
                loan.type.toLowerCase().includes(searchLower) ||
                loan.amount.toLowerCase().includes(searchLower) ||
                loan.status.toLowerCase().includes(searchLower)
            );
        }

        filteredLoans.sort((a, b) => {
            let compareA: any, compareB: any;

            switch (localOrderBy) {
                case 'date':
                    compareA = new Date(a.application_date).getTime();
                    compareB = new Date(b.application_date).getTime();
                    break;
                case 'type':
                    compareA = a.type.toLowerCase();
                    compareB = b.type.toLowerCase();
                    break;
                case 'amount':
                    compareA = parseFloat(a.amount.replace(/[^0-9.-]+/g, ""));
                    compareB = parseFloat(b.amount.replace(/[^0-9.-]+/g, ""));
                    break;
                case 'status':
                    compareA = a.status.toLowerCase();
                    compareB = b.status.toLowerCase();
                    break;
                default:
                    compareA = new Date(a.application_date).getTime();
                    compareB = new Date(b.application_date).getTime();
            }

            if (localOrderDirection === 'default') {
                return compareA < compareB ? -1 : compareA > compareB ? 1 : 0;
            } else {
                return compareA < compareB ? 1 : compareA > compareB ? -1 : 0;
            }
        });

        setDisplayedTransactions(filteredTransactions);
        setDisplayedLoans(filteredLoans);
    }, [localSearch, localOrderBy, localOrderDirection, recentTransactions, currentLoans]);

    const getInitials = (firstName: string, lastName: string) => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    const totalResults = displayedTransactions.length + displayedLoans.length;

    // Custom Profile Card Component
    const ProfileCard = ({ title = "Profile", data }: { title?: string; data?: any }) => {
        // Determine text color based on delinquency rate
        const delinquencyRate = parseFloat(data?.rate) || 0;
        const rateColorClass = delinquencyRate > 10 ? "text-red-600" : "text-destructive-foreground";

        return (
            <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border">
                <div className="flex flex-col p-5 py-2.5 border-b">
                    <div className="text-sm font-medium text-foreground">{title}</div>
                </div>

                <div className="flex flex-col p-5 gap-4">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="rounded-full bg-muted w-16 h-16 flex items-center justify-center border-b">
                                <p className="font-semibold text-2xl">{data?.initial}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="font-semibold text-md">{data?.member}</p>
                                <p className="text-xs text-muted-foreground">Member ID: {data?.id}</p>
                            </div>
                        </div>
                        <div className="flex-1 w-fit text-right">
                            <p className="text-xs text-muted-foreground">Delinquency Rate</p>
                            <p className={`font-semibold text-lg ${rateColorClass}`}>
                                {data?.rate}%
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xs text-muted-foreground">Share Capital</p>
                        <p className="font-semibold text-sm text-right">
                            {formatShareCapital(memberData.share_capital)}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xs text-muted-foreground">Joined Since</p>
                            <p className="text-xs text-muted-foreground text-right">{data?.dateJoined}</p>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xs text-muted-foreground">Email</p>
                            <p className="text-xs text-muted-foreground text-right">{data?.email}</p>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xs text-muted-foreground">Contact Number</p>
                            <p className="text-xs text-muted-foreground text-right">{data?.contact}</p>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xs text-muted-foreground">Status</p>
                            <p className="text-xs text-muted-foreground text-right">{data?.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const profileMember = {
        initial: getInitials(memberData.first_name, memberData.last_name),
        id: memberData.id_coop,
        member: memberData.full_name,
        rate: memberData.delinquency_rate?.toString() || "0",
        dateJoined: memberData.join_date,
        email: memberData.email,
        contact: memberData.contact_num,
        status: memberData.status,
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Overview" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex-1">
                    <ProfileCard title="Member Profile" data={profileMember} />
                </div>
                <div className="flex flex-row h-fit w-full justify-between">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">
                                <Settings2 className="w-16"/>
                                Display
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-fit p-0">
                            <div className="grid">
                                <div className="flex items-center w-full gap-4 p-3 justify-between">
                                    <div className="flex items-center gap-2">
                                        <ArrowUpDown size="16"/>
                                        <span className="text-sm font-medium">Order by</span>
                                    </div>
                                    <Select
                                        value={localOrderBy}
                                        onValueChange={setLocalOrderBy}
                                    >
                                        <SelectTrigger className="w-34">
                                            <SelectValue placeholder="Select order" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="name">Name</SelectItem>
                                                <SelectItem value="date">Date</SelectItem>
                                                <SelectItem value="type">Type</SelectItem>
                                                <SelectItem value="amount">Amount</SelectItem>
                                                <SelectItem value="status">Status</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Separator className="bg-gray-300 h-px" />
                                <div className="flex items-center w-full gap-4 p-3">
                                    <RadioGroup
                                        value={localOrderDirection}
                                        onValueChange={setLocalOrderDirection}
                                        className="flex gap-6"
                                    >
                                        <div className="flex items-center gap-2">
                                            <RadioGroupItem value="default" id="r1" />
                                            <span className="text-sm font-medium">Ascending</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <RadioGroupItem value="comfortable" id="r2" />
                                            <span className="text-sm font-medium">Descending</span>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <InputGroup className="w-sm">
                        <InputGroupInput
                            placeholder="Search"
                            value={localSearch}
                            onChange={(e) => setLocalSearch(e.target.value)}
                        />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min dark:border-sidebar-border">
                    <div className="flex flex-col w-full rounded-xl bg-card text-card-foreground overflow-hidden border">
                        <Tabs defaultValue="loans" className="w-full">
                            <TabsList>
                                <TabsTrigger value="loans">Loans</TabsTrigger>
                                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                            </TabsList>

                            {/* Loans Tab - Clickable rows */}
                            <TabsContent value="loans" className="w-full overflow-x-auto">
                                {displayedLoans.length > 0 ? (
                                    <div className="divide-y">
                                        {displayedLoans.map((loan, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleLoanClick(loan)}
                                                className={cn(
                                                    "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors cursor-pointer"
                                                )}
                                            >
                                                <div className="flex-1 min-w-[200px]">
                                                    <p className="font-semibold text-sm capitalize">
                                                        {loan.type?.toLowerCase() || "General Loan"}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {formatDateTime(loan.application_date)}
                                                    </p>
                                                </div>

                                                <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                                                    ₱ {loan.amount}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center text-muted-foreground p-6">
                                        No loans available
                                    </div>
                                )}
                            </TabsContent>

                            {/* Transactions Tab */}
                            <TabsContent value="transactions" className="w-full overflow-x-auto">
                                {displayedTransactions.length > 0 ? (
                                    <div className="divide-y">
                                        {displayedTransactions.map((transaction, index) => (
                                            <div
                                                key={index}
                                                className={cn(
                                                    "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors"
                                                )}
                                            >
                                                <div className="flex-1 min-w-[200px]">
                                                    <p className="font-semibold text-sm capitalize">
                                                        {transaction.type?.toLowerCase() || "Unknown"}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {formatDateTime(transaction.created_at_raw)}
                                                    </p>
                                                </div>

                                                <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                                                    {formatAmount(transaction.amount || 0)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center text-muted-foreground p-6">
                                        No transactions available
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
