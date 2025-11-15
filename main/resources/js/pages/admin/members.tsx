import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import admin from "@/routes/admin";
import * as React from "react";
import {LoanRow} from "@/components/rows/loan";
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group';
import {ArrowUpDown, Plus, Search, Settings2} from "lucide-react";
import { Button } from "@/components/ui/button"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import { Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Separator} from "@radix-ui/react-select";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { MemberRow } from '@/components/rows/member';
import member from '@/routes/member';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Members',
        href: admin.members().url
    },
];
interface AdminMembersProps {
    members: any[],
    lastNameDesc: any[],
    lastNameAsc: any[],
    firstNameAsc: any[],
    firstNameDesc: any[],
    typeDesc: any[],
    typeAsc: any[],
    dateDesc: any[],
    dateAsc: any[],
}
export default function AdminMembers({members,lastNameDesc,lastNameAsc,firstNameAsc,firstNameDesc,typeAsc,typeDesc,dateAsc,dateDesc}: AdminMembersProps) {
    const [memberList, setMemberList] = React.useState(members); 
    const [category, setCategory] = React.useState('fname');
    const [order, setOrder] = React.useState('comfortable');
    const [search,setSearch] = React.useState('');
    const [filteredMembers,setFilteredMembers] = React.useState(members);
    const searchFilter = (val: string,memberList : any = null): void => {
        setSearch(val);
        if(!memberList){
            setFilteredMembers(memberList || filteredMembers);
        }
        // If search bar is cleared, show full list again
        if (val.trim() === '') {
            setMemberList(filteredMembers);
        }

        const filteredList = filteredMembers.filter((member) => {
            const query = val.toLowerCase();
            return (
            member?.first_name?.toLowerCase().includes(query) ||
            member?.last_name?.toLowerCase().includes(query) ||
            member?.middle_name?.toLowerCase().includes(query) ||
            member?.suffix?.toLowerCase().includes(query)
            );
        });
        setMemberList(filteredList);
    };
    const result = ():any[] =>{
        let members : any[] = [];
        if(category === 'lname' && order === 'comfortable'){
            members = lastNameDesc;
        } else if(category === 'lname' && order === 'default'){
            members = lastNameAsc;
        } else if(category === 'fname' && order === 'comfortable'){
            members = firstNameDesc;
        } else if(category === 'fname' && order === 'default'){
            members = firstNameAsc;
        }else if(category === 'type' && order === 'comfortable'){
            members = typeDesc;
        } else if(category === 'type' && order === 'default'){
            members = typeAsc;
        }else if(category === 'date' && order === 'comfortable'){
            members = dateDesc;
        } else if(category === 'date' && order === 'default'){
            members = dateAsc;
        }
        return members;
    }
    React.useEffect(()=>{
        const members = result();
        setFilteredMembers(members);
        searchFilter(search,members);
    },[category,order,search]);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Members" />
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
                                    <Select value={category} onValueChange={(val) => {setCategory(val)}}>
                                        <SelectTrigger className="w-34">
                                            <SelectValue placeholder="Select order" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="fname">Firstname</SelectItem>
                                                <SelectItem value="lname">Lastname</SelectItem>
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
                    <InputGroup className="w-sm" >
                        <InputGroupInput placeholder="Search..." value={search} onChange={(e) => searchFilter(e.target.value)}/>
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">{memberList?.length+" "+ "Result(s)"} </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {memberList.map((member, i) => (
                            <MemberRow key={i} data={member} category={category} />
                        )
                        )}
                        </div>
                </div>
            </div>
        </AppLayout>
    );
}
