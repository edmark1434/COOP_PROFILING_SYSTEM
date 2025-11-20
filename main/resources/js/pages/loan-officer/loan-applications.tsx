import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import loanOfficer from "@/routes/loan-officer";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Search, Settings2 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@radix-ui/react-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

// LoanRow component matching the overview page style
function LoanRow({ data, className, ...props }: any) {
    const getInitials = (name: string) => {
        const names = name.split(" ");
        const initials = names.map((n) => n.charAt(0).toUpperCase());
        return initials.join("");
    };

    const handleClick = () => {
        router.visit(`/loan-officer/loans/${data.id}`);
    };

    return (
        <div
            className={cn(
                "flex flex-row gap-4 items-center px-4 py-3 hover:bg-muted/40 transition-colors cursor-pointer",
                className
            )}
            onClick={handleClick}
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
        title: 'Loan Applications',
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
    remarks?: string;
}

interface Filters {
    search: string;
    orderBy: string;
    orderDirection: string;
}

interface LoanApplicationsProps {
    loans: Loan[];
    totalResults: number;
    filters: Filters;
}

export default function LoanOfficerLoanApplications({ loans, filters }: LoanApplicationsProps) {
    const [searchValue, setSearchValue] = React.useState(filters.search);
    const [orderBy, setOrderBy] = React.useState(filters.orderBy);
    const [orderDirection, setOrderDirection] = React.useState(filters.orderDirection);

    // Debounce search
    React.useEffect(() => {
        const timer = setTimeout(() => {
            applyFilters({ search: searchValue });
        }, 300);

        return () => clearTimeout(timer);
    }, [searchValue]);

    const applyFilters = (updates: Partial<{ search: string; orderBy: string; orderDirection: string }>) => {
        const newFilters = {
            search: updates.search !== undefined ? updates.search : searchValue,
            orderBy: updates.orderBy !== undefined ? updates.orderBy : orderBy,
            orderDirection: updates.orderDirection !== undefined ? updates.orderDirection : orderDirection,
        };

        router.get(
            window.location.pathname,
            newFilters,
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };

    const handleOrderByChange = (value: string) => {
        setOrderBy(value);
        applyFilters({ orderBy: value });
    };

    const handleOrderDirectionChange = (value: string) => {
        setOrderDirection(value);
        applyFilters({ orderDirection: value });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Loan Applications" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-row h-fit w-full justify-between">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">
                                <Settings2 className="w-16" />
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
                                                <SelectItem value="name">Name</SelectItem>
                                                <SelectItem value="date">Date</SelectItem>
                                                <SelectItem value="type">Type</SelectItem>
                                                <SelectItem value="amount">Amount</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Separator className="bg-gray-300 h-px" />
                                <div className="flex items-center w-full gap-4 p-3">
                                    <RadioGroup value={orderDirection} onValueChange={handleOrderDirectionChange} className="flex gap-6">
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
                {/* Removed the "Loan Applications" header from the table */}
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {loans.length > 0 ? (
                            loans.map((loan) => (
                                <LoanRow key={loan.id} data={loan} />
                            ))
                        ) : (
                            <div className="text-sm text-center py-8 text-muted-foreground">
                                {searchValue ? `No loan applications found for "${searchValue}"` : 'No loan applications found'}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
