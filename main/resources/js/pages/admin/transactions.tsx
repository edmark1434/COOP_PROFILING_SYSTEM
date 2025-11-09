import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import admin from "@/routes/admin";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import * as React from "react";
import {TransactionRow} from "@/components/rows/transaction";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transactions',
        href: admin.transactions().url
    },
];

export default function AdminTransactions() {
    const transactions = [
        {
            type: "Loan Payment",
            date: "October 4, 2025 · 1:32 PM",
            member: "Jodeci Abria Pacibe",
            processedBy: "Dan Bejec",
            amount: "₱ 5,125.00"
        },
        {
            type: "Loan Disbursement",
            date: "October 1, 2025 · 1:30 PM",
            member: "Jodeci Abria Pacibe",
            processedBy: "Dan Bejec",
            amount: "₱ 50,000.00"
        },
        {
            type: "Share Capital Contribution",
            date: "September 29, 2025 · 12:00 PM",
            member: "Jodeci Abria Pacibe",
            processedBy: "Dan Bejec",
            amount: "₱ 35,000.00"
        },
        {
            type: "Savings Deposit",
            date: "September 20, 2025 · 10:45 AM",
            member: "Carla Mae Espino",
            processedBy: "Mika Santos",
            amount: "₱ 10,000.00"
        },
        {
            type: "Loan Payment",
            date: "September 15, 2025 · 3:20 PM",
            member: "Dan Bejec",
            processedBy: "Carla Mae Espino",
            amount: "₱ 3,200.00"
        },
        {
            type: "Loan Disbursement",
            date: "September 10, 2025 · 9:10 AM",
            member: "Mika Santos",
            processedBy: "Jodeci Abria Pacibe",
            amount: "₱ 25,000.00"
        },
        {
            type: "Share Capital Withdrawal",
            date: "September 5, 2025 · 4:40 PM",
            member: "Angelica Cruz",
            processedBy: "Dan Bejec",
            amount: "₱ 15,000.00"
        },
        {
            type: "Savings Withdrawal",
            date: "August 28, 2025 · 11:05 AM",
            member: "Carla Mae Espino",
            processedBy: "Mika Santos",
            amount: "₱ 8,500.00"
        },
        {
            type: "Loan Payment",
            date: "August 18, 2025 · 2:15 PM",
            member: "Angelica Cruz",
            processedBy: "Dan Bejec",
            amount: "₱ 4,000.00"
        },
        {
            type: "Share Capital Contribution",
            date: "August 10, 2025 · 10:00 AM",
            member: "Mika Santos",
            processedBy: "Carla Mae Espino",
            amount: "₱ 20,000.00"
        }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transactions" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
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
                                    <Select defaultValue="name">
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
                                    <RadioGroup defaultValue="comfortable" className="flex gap-6">
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
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {transactions.map((item, i) => (
                            <TransactionRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
