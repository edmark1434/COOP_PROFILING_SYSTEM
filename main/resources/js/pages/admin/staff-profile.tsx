import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import * as React from "react";
import {StaffRow} from "@/components/rows/staff";
import admin from "@/routes/admin";
import {ProfileCard} from "@/components/ui/profile-card";
import {TabbedTable} from "@/components/tabbed-table";
import {AccountRow} from "@/components/rows/account";
import {AuditLogRow} from "@/components/rows/audit-log";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Staff',
        href: admin.staffProfile().url
    },
];

export default function AdminStaff() {
    const member = {
        initial: "JP",
        id: "1231231",
        member: "Jodeci Abria Pacibe",
        type: "Teller",
        shareCapital: "₱ 5,125.00",
        dateJoined: "October 12, 2023",
        email: "1234@gmail.com",
        contact: "0912345123",
        status: "Active",
    };
    const auditLogs = [
        {
            description: "Recorded a Transaction",
            type: "Loan Payment",
            id: "12342342",
            time: "2:02 PM",
            date: "October 23, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Loan Disbursement",
            id: "12342343",
            time: "10:15 AM",
            date: "October 21, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Share Capital Contribution",
            id: "12342344",
            time: "1:30 PM",
            date: "October 20, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Loan Payment",
            id: "12342345",
            time: "3:45 PM",
            date: "October 18, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Educational Loan Payment",
            id: "12342346",
            time: "11:00 AM",
            date: "October 15, 2025",
        },
        {
            description: "Recorded a Transaction",
            type: "Loan Disbursement",
            id: "12342347",
            time: "4:20 PM",
            date: "October 12, 2025",
        }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Staff" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/*Profile*/}
                <div className="lex flex-row h-fit w-full">
                    <ProfileCard type="staff" data={member} />
                </div>

                {/*Search Bar*/}
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
                    <div className="flex flex-col px-4 py-2 border-b">
                        <div className="text-sm font-medium text-(--color-primary)">Audit Logs</div>
                    </div>
                    <div className="divide-y h-fit">
                        {auditLogs.map((item, i) => (
                            <AuditLogRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
