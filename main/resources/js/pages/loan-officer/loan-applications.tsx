import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import loanOfficer from "@/routes/loan-officer";
import * as React from "react";
import {LoanRow} from "@/components/rows/loan";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Loan Applications',
        href: loanOfficer.overview().url
    },
];

export default function LoanOfficerLoanApplications() {
    let stats;
    const loans = [
        {
            initial: "JP",
            type: "Educational Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 5,125.00"
        },
        {
            initial: "JP",
            type: "Housing Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 15,000.00"
        },
        {
            initial: "JP",
            type: "Business Loan",
            member: "Jodeci Abria Pacibe",
            amount: "₱ 50,000.00"
        },
    ];


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Loan Applications" />
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
                        {loans.map((item, i) => (
                            <LoanRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
