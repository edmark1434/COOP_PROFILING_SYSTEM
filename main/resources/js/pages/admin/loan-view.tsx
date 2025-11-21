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
import {ProfileCard} from "@/components/ui/profile-card";
import admin from "@/routes/admin";

interface LoanProp{
    prop : {
        id: number,
        name: string,
        memId : number,
        memStatus : string
    },
    loanDetail: any,
    member: any[],
    installments: any[],
    installmentPaid: any[],
    installmentPaidSum: number,
    installmentDateAsc : any[],
    installmentDateDesc : any[],
    transactions: any[],
    transactionDateAsc: any[],
    transactionDateDesc: any[],
    transactionTypeAsc: any[],
    transactionTypeDesc: any[],
    newDueDate : any

}

export function getDateString(dateData:string){
        const date = new Date(dateData);
        const formatted = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        });
        return formatted;
    }
export default function LoanView({prop,loanDetail,member,installments,installmentPaid,installmentDateAsc,installmentDateDesc,installmentPaidSum,transactions,transactionDateAsc, transactionDateDesc, transactionTypeAsc, transactionTypeDesc,newDueDate}:LoanProp) {
    const dueDate = new Date(newDueDate.due_date);
    dueDate.setMonth(dueDate.getMonth() + 1);
    const newDate = dueDate.toISOString().split("T")[0];


    const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Loan/ID',
        href: admin.loanView(prop.id).url
    },
];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="ID" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {loanDetail.status != 'Rejected' ? (
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
                                            <p className="text-md font-semibold text-primary">{`₱ ${Number(loanDetail?.amount - installmentPaidSum).toLocaleString("en-US") }`}</p>
                                            <p className="text-xs text-muted-foreground pb-1">({loanDetail.term_months}%)</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">out of {`₱ ${Number(loanDetail?.amount).toLocaleString("en-US")}`}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Current Period </p>
                                        <p className="text-sm font-semibold text-primary">{installmentPaid.length} out of {loanDetail.term_months} months</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Next Due</p>
                                        <p className="text-sm font-semibold text-primary">{getDateString(newDate)} </p>
                                    </div>
                                </div>
                            </div>

                            {/*Details Card*/}
                           <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border w-[50%]">
                                <div className="flex flex-col p-5 py-2.5 border-b">
                                    <div className="text-sm font-medium text-(--color-primary)">Details</div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Status</p>
                                            <p className="text-sm font-semibold text-primary">{loanDetail?.status}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Date Approved</p>
                                            <p className="text-sm font-semibold text-primary">{loanDetail?.updated_at.split("T")[0] + " "+ new Date(loanDetail?.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Purpose</p>
                                            <p className="text-sm font-semibold text-primary">{loanDetail?.purpose?.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 gap-3">
                                        {/* <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Processed By</p>
                                            <p className="text-sm font-semibold text-primary">{loanDetail?.processBy}</p>
                                        </div> */}
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Amount</p>
                                            <p className="text-sm font-semibold text-primary">{`₱ ${Number(loanDetail?.amount).toLocaleString("en-US")}`}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Plan</p>
                                            <p className="text-sm font-semibold text-primary">{`${loanDetail?.term_months} Months , ${loanDetail?.interest_rate}% interests`}</p>
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
                                        <p className="text-sm font-semibold text-primary">{prop.name}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Member ID</p>
                                        <p className="text-sm font-semibold text-primary">{prop.memId}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-muted-foreground">Status</p>
                                        <p className="text-sm font-semibold text-primary">{prop.memStatus}</p>
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
                                            <Select defaultValue="date">
                                                <SelectTrigger className="w-34">
                                                    <SelectValue placeholder="Select order"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="type">Type</SelectItem>
                                                        <SelectItem value="date">Date</SelectItem>
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
                                            <p className="text-sm font-semibold text-primary">{loanDetail?.status}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Date Approved</p>
                                            <p className="text-sm font-semibold text-primary">{loanDetail?.updated_at.split("T")[0] + " "+ new Date(loanDetail?.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Purpose</p>
                                            <p className="text-sm font-semibold text-primary">{loanDetail?.purpose?.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Amount</p>
                                            <p className="text-sm font-semibold text-primary">{`₱ ${Number(loanDetail?.amount).toLocaleString("en-US")}`}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">Plan</p>
                                            <p className="text-sm font-semibold text-primary">{`${loanDetail?.term_months} Months , ${loanDetail?.interest_rate}%`}</p>
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
