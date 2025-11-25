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
import admin from "@/routes/admin";
import {ProfileCard} from "@/components/ui/profile-card";
import {AuditLogRow} from "@/components/rows/audit-logStaff";
import * as React from "react";

interface AdminStaff{
    user : {
        id: string | number;
        name: string;
        type: string;
        status:string;
        email:string;
        created_at:string;
        initial: string;
    },
    typeAsc: any[],
    typeDesc: any[],
    DateAsc: any[],
    DateDesc: any[],
}

export default function AdminStaff({user,typeAsc,typeDesc,DateAsc,DateDesc}:AdminStaff) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Staff',
            href: admin.staffProfile(Number(user.id)).url
        },
    ];

    const [orderBy, setOrderBy] = React.useState<'date' | 'type'>('date');
    const [orderDirection, setOrderDirection] = React.useState<'asc' | 'desc'>('desc');
    const [searchTerm, setSearchTerm] = React.useState('');

    // Function to determine which audit logs to display
    const getFilteredAuditLogs = () => {
        let logs: any[] = [];

        if(orderBy === 'date') {
            logs = orderDirection === 'asc' ? DateAsc : DateDesc;
        } else if(orderBy === 'type') {
            logs = orderDirection === 'asc' ? typeAsc : typeDesc;
        }

        if(searchTerm.trim()) {
            const term = searchTerm.toLowerCase();
            logs = logs.filter(log =>
                log.description.toLowerCase().includes(term) ||
                log.type.toLowerCase().includes(term)
            );
        }

        return logs;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Staff" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/*Profile*/}
                <div className="lex flex-row h-fit w-full">
                    <ProfileCard type="staff" data={user} />
                </div>

                {/*Search & Filter Bar*/}
                <div className="flex flex-row h-fit w-full justify-between gap-4">
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
                                        value={orderBy}
                                        onValueChange={(val: 'date' | 'type') => setOrderBy(val)}
                                    >
                                        <SelectTrigger className="w-34">
                                            <SelectValue placeholder="Select order" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="date">Date</SelectItem>
                                                <SelectItem value="type">Type</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Separator className="bg-gray-300 h-px" />
                                <div className="flex items-center w-full gap-4 p-3">
                                    <RadioGroup
                                        value={orderDirection}
                                        onValueChange={(val: 'asc' | 'desc') => setOrderDirection(val)}
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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">{getFilteredAuditLogs().length} results</InputGroupAddon>
                    </InputGroup>
                </div>

                {/*Audit Logs Table*/}
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="flex flex-col px-4 py-2 border-b">
                        <div className="text-sm font-medium text-foreground">Audit Logs</div>
                    </div>
                    <div className="divide-y h-fit">
                        {getFilteredAuditLogs().map((item, i) => (
                            <AuditLogRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
