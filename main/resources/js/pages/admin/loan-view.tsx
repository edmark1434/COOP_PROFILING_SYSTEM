import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import {TabbedTable} from "@/components/tabbed-table";
import {memberProfile} from "@/routes/member";
import {ProfileCard} from "@/components/ui/profile-card";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Loan/ID',
        href: memberProfile().url
    },
];

export default function LoanView() {
    let rejected = true
    const member = {
        initial: "JP",
        id: "1231231",
        member: "Jodeci Abria Pacibe",
        rate: "60",
        shareCapital: "₱ 5,125.00",
        dateJoined: "October 12, 2023",
        email: "1234@gmail.com",
        contact: "0912345123",
        status: "Active",
    };
    const transactions = [
        {
            type: "Loan Payment",
            date: "October 4, 2025 · 1:32 PM",
            amount: "₱ 5,125.00"
        },
        {
            type: "Loan Disbursement",
            date: "October 1, 2025 · 1:30 PM",
            amount: "₱ 50,000.00"
        },
        {
            type: "Share Capital Contribution",
            date: "September 29, 2025 · 12:00 PM",
            amount: "₱ 35,000.00"
        }
    ];
    const installments = [
        {
            status: "Pending",
            badgeType: "secondary",
            amount: "₱ 50,000.00",
            date: "October 23, 2025",
        },
        {
            status: "Paid",
            badgeType: "outline",
            amount: "₱ 5,000.00",
            date: "October 20, 2025",
        },
        {
            status: "Pending",
            badgeType: "secondary",
            amount: "₱ 10,000.00",
            date: "October 18, 2025",
        },
        {
            status: "Overdue",
            badgeType: "destructive",
            amount: "₱ 7,500.00",
            date: "October 15, 2025",
        },

    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="ID" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {!rejected ? (
                    <>
                        <div className="flex flex-row gap-4">
                            {/*Balance Card*/}
                            <div
                                className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[25%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium text-(--color-primary)">Balance</div>
                                </div>
                                <div className="flex flex-col p-5 gap-3">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-end gap-2">
                                            <p className="text-md font-semibold text-primary">₱ 4,000.00 </p>
                                            <p className="text-xs text-muted-foreground pb-1">(33.3%)</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">out of ₱ 12,600.00</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Current Period </p>
                                        <p className="text-sm font-semibold text-primary">3 out of 6</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Next Due</p>
                                        <p className="text-sm font-semibold text-primary">December 3, 2025 </p>
                                    </div>
                                </div>
                            </div>

                            {/*Details Card*/}
                            <div
                                className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium text-(--color-primary)">Details</div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Status</p>
                                            <p className="text-sm font-semibold text-primary">Ongoing</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Date Approved</p>
                                            <p className="text-sm font-semibold text-primary">March 2, 2025</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Purpose</p>
                                            <p className="text-sm font-semibold text-primary">Medical</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Processed By</p>
                                            <p className="text-sm font-semibold text-primary">JDan Bejec</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Amount</p>
                                            <p className="text-sm font-semibold text-primary">₱ 12,000.00</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Plan</p>
                                            <p className="text-sm font-semibold text-primary">12 months, 5% interest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Transactor Card*/}
                            <div
                                className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[25%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium text-(--color-primary)">Transactor</div>
                                </div>
                                <div className="flex flex-col p-5 gap-3">
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Name</p>
                                        <p className="text-sm font-semibold text-primary">Jodeci Abria Pacibe</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Member ID</p>
                                        <p className="text-sm font-semibold text-primary">1012345678</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Status</p>
                                        <p className="text-sm font-semibold text-primary">Active</p>
                                    </div>
                                </div>
                            </div>


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
                                            <Select defaultValue="name">
                                                <SelectTrigger className="w-34">
                                                    <SelectValue placeholder="Select order"/>
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
                                        <Separator className="bg-gray-300 h-px"/>
                                        <div className="flex items-center w-full gap-4 p-3">
                                            <RadioGroup defaultValue="comfortable" className="flex gap-6">
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="default" id="r1"/>
                                                    <span className="text-sm font-medium">Ascending</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="comfortable" id="r2"/>
                                                    <span className="text-sm font-medium">Descending</span>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <InputGroup className="w-sm">
                                <InputGroupInput placeholder="Search..."/>
                                <InputGroupAddon>
                                    <Search/>
                                </InputGroupAddon>
                                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                            </InputGroup>
                        </div>
                        <div
                            className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min dark:border-sidebar-border">
                            <TabbedTable
                                variant="bordered"
                                defaultTab="transactions"
                                tabs={[
                                    {
                                        value: "installments",
                                        label: "Installments",
                                        data: installments
                                    },
                                    {
                                        value: "transactions",
                                        label: "Transactions",
                                        data: transactions
                                    },
                                ]}/>
                        </div>
                    </>
                ):(
                    <>
                        <div className="flex flex-col items-center w-full gap-5">
                            {/*Details Card*/}
                            <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium text-(--color-primary)">Details</div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Status</p>
                                            <p className="text-sm font-semibold text-primary">Ongoing</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Date Approved</p>
                                            <p className="text-sm font-semibold text-primary">March 2, 2025</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Purpose</p>
                                            <p className="text-sm font-semibold text-primary">Medical</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Processed By</p>
                                            <p className="text-sm font-semibold text-primary">JDan Bejec</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Amount</p>
                                            <p className="text-sm font-semibold text-primary">₱ 12,000.00</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Plan</p>
                                            <p className="text-sm font-semibold text-primary">12 months, 5% interest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProfileCard title="Transactor" type="member" data={member} className="w-[50%]"/>
                        </div>

                    </>
                )}
            </div>
        </AppLayout>
    );
}
