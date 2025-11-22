import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { myLoans } from "@/routes/member";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Search, Settings2 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@radix-ui/react-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { TabbedTable } from "@/components/tabbed-table";
import { ProfileCard } from "@/components/ui/profile-card";

interface LoanProp {
    prop: {
        id: number,
        name: string,
        memId: number,
        memStatus: string
    },
    loanDetail: any,
    member: any,
    installments: any[],
    installmentPaid: any[],
    installmentPaidSum: number,
    installmentDateAsc: any[],
    installmentDateDesc: any[],
    transactions: any[],
    transactionDateAsc: any[],
    transactionDateDesc: any[],
    transactionTypeAsc: any[],
    transactionTypeDesc: any[],
    newDueDate: any
}

export function getDateString(dateData: string) {
    const date = new Date(dateData);
    const formatted = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return formatted;
}

export default function MemberLoanView({
    prop,
    loanDetail,
    member: memberData,
    installments,
    installmentPaid,
    installmentDateAsc,
    installmentDateDesc,
    installmentPaidSum,
    transactions,
    transactionDateAsc,
    transactionDateDesc,
    transactionTypeAsc,
    transactionTypeDesc,
    newDueDate
}: LoanProp) {
    const [orderBy, setOrderBy] = React.useState("date");
    const [orderDirection, setOrderDirection] = React.useState("desc");
    const [searchValue, setSearchValue] = React.useState("");

    // Calculate new due date
    const dueDate = newDueDate ? new Date(newDueDate.due_date) : new Date();
    dueDate.setMonth(dueDate.getMonth() + 1);
    const newDate = dueDate.toISOString().split("T")[0];

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'My Loans',
            href: '/member/my-loans'
        },
        {
            title: `${loanDetail?.ref_no || 'Loan Details'}`,
            href: `/member/loan-details/${prop.id}`
        },
    ];

    // Filter and sort logic for tables
    const getFilteredData = (data: any[], type: 'installments' | 'transactions') => {
        let filtered = data;

        // Apply search filter
        if (searchValue) {
            filtered = filtered.filter(item => {
                const searchLower = searchValue.toLowerCase();
                if (type === 'transactions') {
                    return (
                        item.type?.toLowerCase().includes(searchLower) ||
                        item.amount?.toString().includes(searchLower) ||
                        item.description?.toLowerCase().includes(searchLower)
                    );
                } else {
                    return (
                        item.amount?.toString().includes(searchLower) ||
                        item.status?.toLowerCase().includes(searchLower)
                    );
                }
            });
        }

        // Apply sorting
        if (type === 'transactions') {
            if (orderBy === 'date') {
                filtered = orderDirection === 'asc' ? transactionDateAsc : transactionDateDesc;
            } else if (orderBy === 'type') {
                filtered = orderDirection === 'asc' ? transactionTypeAsc : transactionTypeDesc;
            }
        } else {
            if (orderBy === 'date') {
                filtered = orderDirection === 'asc' ? installmentDateAsc : installmentDateDesc;
            }
        }

        return filtered;
    };

    const handleOrderByChange = (value: string) => {
        setOrderBy(value);
    };

    const handleOrderDirectionChange = (value: string) => {
        setOrderDirection(value);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Loan #${prop.id}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {loanDetail.status !== 'Rejected' ? (
                    <>
                        <div className="flex flex-row gap-4">
                            {/* Balance Card */}
                            <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[25%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium">Balance</div>
                                </div>
                                <div className="flex flex-col p-5 gap-3">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-end gap-2">
                                            <p className="text-md font-semibold text-primary">
                                                {`₱ ${Number(loanDetail?.amount - installmentPaidSum).toLocaleString("en-US")}`}
                                            </p>
                                            <p className="text-xs text-muted-foreground pb-1">
                                                ({Math.round((installmentPaidSum / loanDetail?.amount) * 100)}%)
                                            </p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            out of {`₱ ${Number(loanDetail?.amount).toLocaleString("en-US")}`}
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Current Period</p>
                                        <p className="text-sm font-semibold text-primary">
                                            {installmentPaid.length} out of {loanDetail.term_months} months
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Next Due</p>
                                        <p className="text-sm font-semibold text-primary">
                                            {getDateString(newDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Details Card */}
                            <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium">Details</div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Status</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {loanDetail?.status}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Date Approved</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {loanDetail?.updated_at.split("T")[0] + " " +
                                                    new Date(loanDetail?.updated_at).toLocaleTimeString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        hour12: true
                                                    }).toUpperCase()}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Purpose</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {loanDetail?.purpose?.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Amount</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {`₱ ${Number(loanDetail?.amount).toLocaleString("en-US")}`}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Plan</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {`${loanDetail?.term_months} Months, ${loanDetail?.interest_rate}% interest`}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Processed By</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {memberData.processBy}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Transactor Card - Keep as "Transactor" for consistency */}
                            <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[25%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium">Transactor</div>
                                </div>
                                <div className="flex flex-col p-5 gap-3">
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Name</p>
                                        <p className="text-sm font-semibold text-primary">{prop.name}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Member ID</p>
                                        <p className="text-sm font-semibold text-primary">{prop.memId}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Status</p>
                                        <p className="text-sm font-semibold text-primary">{prop.memStatus}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Filters Section */}
                        <div className="flex flex-row h-fit w-full justify-between">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline">
                                        <Settings2 className="w-4 h-4 mr-2" />
                                        Display
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-fit p-0">
                                    <div className="grid">
                                        <div className="flex items-center w-full gap-4 p-3 justify-between">
                                            <div className="flex items-center gap-2">
                                                <ArrowUpDown size="16" />
                                                <span className="text-sm font-medium">Order by</span>
                                            </div>
                                            <Select value={orderBy} onValueChange={handleOrderByChange}>
                                                <SelectTrigger className="w-34">
                                                    <SelectValue placeholder="Select order" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="type">Type</SelectItem>
                                                        <SelectItem value="date">Date</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Separator className="bg-gray-300 h-px" />
                                        <div className="flex items-center w-full gap-4 p-3">
                                            <RadioGroup
                                                value={orderDirection}
                                                onValueChange={handleOrderDirectionChange}
                                                className="flex gap-6"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="asc" id="r1" />
                                                    <span className="text-sm font-medium">Ascending</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="desc" id="r2" />
                                                    <span className="text-sm font-medium">Descending</span>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <InputGroup className="w-sm">
                                <InputGroupInput
                                    placeholder="Search..."
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        {/* Tabbed Table */}
                        <div className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min dark:border-sidebar-border">
                            <TabbedTable
                                variant="bordered"
                                defaultTab="transactions"
                                tabs={[
                                    {
                                        value: "installments",
                                        label: "Installments",
                                        data: getFilteredData(installments, 'installments')
                                    },
                                    {
                                        value: "transactions",
                                        label: "Transactions",
                                        data: getFilteredData(transactions, 'transactions')
                                    },
                                ]}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center w-full gap-5">
                            {/* Details Card - Rejected */}
                            <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium">Details</div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Status</p>
                                            <p className="text-sm font-semibold text-destructive">
                                                {loanDetail?.status}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Date Rejected</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {loanDetail?.updated_at.split("T")[0] + " " +
                                                    new Date(loanDetail?.updated_at).toLocaleTimeString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        hour12: true
                                                    }).toUpperCase()}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Purpose</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {loanDetail?.purpose?.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Amount</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {`₱ ${Number(loanDetail?.amount).toLocaleString("en-US")}`}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Plan</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {`${loanDetail?.term_months} Months, ${loanDetail?.interest_rate}%`}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Processed By</p>
                                            <p className="text-sm font-semibold text-primary">
                                                {memberData.processBy}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProfileCard
                                title="Transactor"
                                type="member"
                                data={memberData}
                                className="w-[50%]"
                            />
                        </div>
                    </>
                )}
            </div>
        </AppLayout>
    );
}