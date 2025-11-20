import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as React from "react";
import {ProfileCard} from "@/components/ui/profile-card";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import {TabbedTable} from "@/components/tabbed-table";
import {memberProfile} from "@/routes/admin";

interface MemberProp {
    member: { id: number | string };
    transactionsAscName: any[];
    transactionsDescName: any[];
    transactionsAscType: any[];
    transactionsDescType: any[];
    transactionsAscDate: any[];
    transactionsDescDate: any[];
    loansAscName: any[];
    loansDescName: any[];
    loansAscType: any[];
    loansDescType: any[];
    loansAscDate: any[];
    loansDescDate: any[];
}

export default function MemberProfile({
    member,
    transactionsAscName,
    transactionsDescName,
    transactionsAscType,
    transactionsDescType,
    transactionsAscDate,
    transactionsDescDate,
    loansAscName,
    loansDescName,
    loansAscType,
    loansDescType,
    loansAscDate,
    loansDescDate,
}: MemberProp) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Members/ID', href: memberProfile(member.id).url },
    ];

    const [orderByField, setOrderByField] = React.useState<"name" | "date" | "type">("name");
    const [orderDirection, setOrderDirection] = React.useState<"asc" | "desc">("asc");
    const [searchQuery, setSearchQuery] = React.useState("");

    // Sorting logic
    const transactions = React.useMemo(() => {
        if (orderByField === "name") return orderDirection === "asc" ? transactionsAscName : transactionsDescName;
        if (orderByField === "type") return orderDirection === "asc" ? transactionsAscType : transactionsDescType;
        if (orderByField === "date") return orderDirection === "asc" ? transactionsAscDate : transactionsDescDate;
        return transactionsAscName;
    }, [orderByField, orderDirection, transactionsAscName, transactionsDescName, transactionsAscType, transactionsDescType, transactionsAscDate, transactionsDescDate]);

    const loans = React.useMemo(() => {
        if (orderByField === "name") return orderDirection === "asc" ? loansAscName : loansDescName;
        if (orderByField === "type") return orderDirection === "asc" ? loansAscType : loansDescType;
        if (orderByField === "date") return orderDirection === "asc" ? loansAscDate : loansDescDate;
        return loansAscName;
    }, [orderByField, orderDirection, loansAscName, loansDescName, loansAscType, loansDescType, loansAscDate, loansDescDate]);

    // Filter dynamically based on active tab and searchQuery
    const filteredLoans = React.useMemo(() => {
        if (!searchQuery) return loans;
        return loans.filter((loan: any) =>
            loan?.purpose?.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [loans, searchQuery]);

    const filteredTransactions = React.useMemo(() => {
        if (!searchQuery) return transactions;
        return transactions.filter((tx: any) =>
            tx.type?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [transactions, searchQuery]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Members/id" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <ProfileCard type="member" data={member} />
                    <ProfileCard type="member" data={member} />
                </div>
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
                                    <Select defaultValue="name" onValueChange={(value) => setOrderByField(value as "name" | "date" | "type")}>
                                        <SelectTrigger className="w-34">
                                            <SelectValue placeholder="Select order" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="name">Name</SelectItem>
                                                <SelectItem value="date">Date</SelectItem>
                                                <SelectItem value="type">Type</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Separator className="bg-gray-300 h-px" />
                                <div className="flex items-center w-full gap-4 p-3">
                                    <RadioGroup
                                        defaultValue="asc"
                                        className="flex gap-6"
                                        onValueChange={(value) => setOrderDirection(value as "asc" | "desc")}
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
                            placeholder={`Search...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min dark:border-sidebar-border">
                    <TabbedTable
                        variant="bordered"
                        defaultTab="transactions"
                        tabs={[
                            { value: "loans", label: "Loans", data: filteredLoans },
                            { value: "transactions", label: "Transactions", data: filteredTransactions },
                        ]}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
