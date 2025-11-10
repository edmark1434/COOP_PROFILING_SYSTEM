import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import admin from "@/routes/admin";
import {TabbedTable} from "@/components/tabbed-table";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import * as React from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Loans',
        href: admin.loans().url
    },
];

export default function AdminLoans() {
    const loans = [
        {
            initial: "JP",
            type: "Educational Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 5,125.00"
        },
        {
            initial: "DB",
            type: "Housing Loan",
            member: "Dan Anton Bejec",
            amount: "₱ 15,000.00"
        },
        {
            initial: "RR",
            type: "Personal Loan",
            member: "Roy Adrian Rondina",
            amount: "₱ 8,500.00"
        },
        {
            initial: "JL",
            type: "Car Loan",
            member: "Jayson Gabriel Limosnero",
            amount: "₱ 25,000.00"
        },
        {
            initial: "ET",
            type: "Business Loan",
            member: "Edmark Talingting",
            amount: "₱ 50,000.00"
        },
        {
            initial: "JN",
            type: "Business Loan",
            member: "Jhon Paul Noquiana",
            amount: "₱ 50,000.00"
        },
    ];
    const loansRejected = [
        {
            initial: "JP",
            type: "Educational Loan",
            member: "Jodeci Abria Pacibe",
            remarks: "Inactive account",
            amount: "₱ 5,125.00"
        },
        {
            initial: "DB",
            type: "Housing Loan",
            member: "Dan Anton Bejec",
            remarks: "Inactive account",
            amount: "₱ 15,000.00"
        },
        {
            initial: "RR",
            type: "Personal Loan",
            member: "Roy Adrian Rondina",
            remarks: "Inactive account",
            amount: "₱ 8,500.00"
        },
    ];



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Loans" />
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
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min dark:border-sidebar-border">
                        <TabbedTable
                            variant="bordered"
                            defaultTab="transactions"
                            tabs={[
                                {
                                    value: "loans-ongoing",
                                    label: "Ongoing",
                                    data: loans
                                },
                                {
                                    value: "loans-disbursed",
                                    label: "Disbursed",
                                    data: loans
                                },
                                {
                                    value: "loans-overdue",
                                    label: "Overdue",
                                    data: loans
                                },
                                {
                                    value: "loans-paid",
                                    label: "Paid",
                                    data: loans
                                },
                                {
                                    value: "loans-pending",
                                    label: "Pending",
                                    data: loans
                                },
                                {
                                    value: "loans-approved",
                                    label: "Approved",
                                    data: loans
                                },
                                {
                                    value: "loans-rejected",
                                    label: "Rejected",
                                    data: loansRejected
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
