import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import admin, { staffProfile } from "@/routes/admin";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Plus, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import * as React from "react";
import {StaffRow} from "@/components/rows/staff";
import {Link} from '@inertiajs/react';
import staffAddForm from '@/routes/admin/staffAddForm';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Staff',
        href: admin.staff().url
    },
];

interface AdminStaffProps {
    staff: any[],
    nameDesc: any[],
    nameAsc: any[],
    typeDesc: any[],
    typeAsc: any[],
    dateDesc: any[],
    dateAsc: any[],
}

export default function AdminStaff({
    staff,
    nameDesc,
    nameAsc,
    typeAsc,
    typeDesc,
    dateAsc,
    dateDesc
}: AdminStaffProps) {
    const [staffList, setStaffList] = React.useState(staff);
    const [category, setCategory] = React.useState('name');
    const [order, setOrder] = React.useState('comfortable');
    const [search, setSearch] = React.useState('');
    const [filteredStaff, setFilteredStaff] = React.useState(staff);

    const searchFilter = (val: string, staffList: any = null): void => {
        setSearch(val);
        if (!staffList) {
            setFilteredStaff(staffList || filteredStaff);
        }
        // If search bar is cleared, show full list again
        if (val.trim() === '') {
            setStaffList(filteredStaff);
        }

        const filteredList = filteredStaff.filter((staffMember) => {
            const query = val.toLowerCase();
            return (
                staffMember?.name?.toLowerCase().includes(query) ||
                staffMember?.email?.toLowerCase().includes(query)
            );
        });
        setStaffList(filteredList);
    };

    const result = (): any[] => {
        let staffData: any[] = [];
        if (category === 'name' && order === 'comfortable') {
            staffData = nameDesc;
        } else if (category === 'name' && order === 'default') {
            staffData = nameAsc;
        } else if (category === 'type' && order === 'comfortable') {
            staffData = typeDesc;
        } else if (category === 'type' && order === 'default') {
            staffData = typeAsc;
        } else if (category === 'date' && order === 'comfortable') {
            staffData = dateDesc;
        } else if (category === 'date' && order === 'default') {
            staffData = dateAsc;
        }
        return staffData;
    };

    React.useEffect(() => {
        const staffData = result();
        setFilteredStaff(staffData);
        searchFilter(search, staffData);
    }, [category, order, search]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Staff" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-row h-fit w-full justify-between gap-4">
                    <div className="flex gap-2">
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
                                        <Select value={category} onValueChange={(val) => {setCategory(val)}}>
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
                                        <RadioGroup value={order} onValueChange={(val) => setOrder(val)} className="flex gap-6">
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
                    </div>
                    <InputGroup className="w-sm">
                        <InputGroupInput
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => searchFilter(e.target.value)}
                        />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">{staffList?.length + " " + "Result(s)"}</InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {staffList.map((staffMember, i) => (
                            <Link href={staffProfile(staffMember.id)}>
                                <StaffRow
                                    key={i}
                                    data={staffMember}
                                    category={category}

                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
