import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState, useMemo } from 'react';

import * as React from "react";
import { TransactionRow } from "@/components/rows/transaction";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Search, Settings2 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transactions',
        href: '/teller/transactions'
    },
];

interface Transaction {
    id: number;
    type: string;
    date: string;
    member: string;
    amount: string;
    raw_amount: number;
    created_at: string;
}

interface TellerTransactionsProps {
    transactions: Transaction[];
    transactionTypes: string[];
}

export default function TellerTransactions({ transactions, transactionTypes }: TellerTransactionsProps) {
    const [search, setSearch] = useState("");
    const [orderBy, setOrderBy] = useState<'date' | 'type' | 'amount'>('date');
    const [direction, setDirection] = useState<'asc' | 'desc'>('desc');
    const [typeFilter, setTypeFilter] = useState<string>('all');

    // Debug: Check what data we're receiving
    console.log('Raw transactions data:', transactions);
    console.log('Transaction types:', transactionTypes);
    console.log('Sample transaction:', transactions[0]);

    const filteredTransactions = useMemo(() => {
        let data = [...transactions];

        // 🔍 Search filter
        if (search.trim() !== "") {
            const searchLower = search.toLowerCase();
            data = data.filter((t) =>
                t.member.toLowerCase().includes(searchLower) ||
                t.type.toLowerCase().includes(searchLower)
            );
        }

        // 🔍 Type filter - FIXED: Case-insensitive comparison
        if (typeFilter !== 'all') {
            data = data.filter((t) =>
                t.type.toLowerCase() === typeFilter.toLowerCase()
            );
        }

        // 🔃 Sorting logic
        data.sort((a, b) => {
            let aValue: any;
            let bValue: any;

            if (orderBy === 'type') {
                aValue = a.type;
                bValue = b.type;
            } else if (orderBy === 'amount') {
                // Use raw_amount and ensure it's a number
                aValue = typeof a.raw_amount === 'number' ? a.raw_amount : parseFloat(a.raw_amount || '0');
                bValue = typeof b.raw_amount === 'number' ? b.raw_amount : parseFloat(b.raw_amount || '0');

                console.log(`Sorting amounts: ${aValue} vs ${bValue}`, {
                    aAmount: a.amount,
                    aRaw: a.raw_amount,
                    bAmount: b.amount,
                    bRaw: b.raw_amount
                });
            } else {
                // Sort by date
                aValue = new Date(a.created_at).getTime();
                bValue = new Date(b.created_at).getTime();
            }

            // Handle string comparison
            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }
            // Handle number comparison
            else {
                if (direction === "asc") {
                    return aValue - bValue;
                } else {
                    return bValue - aValue;
                }
            }
        });

        console.log('Sorted transactions:', data.map(t => ({
            id: t.id,
            type: t.type,
            amount: t.amount,
            raw_amount: t.raw_amount,
            sortOrder: direction
        })));

        return data;
    }, [transactions, search, orderBy, direction, typeFilter]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transactions" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col md:flex-row h-fit w-full justify-between gap-4">
                    <div className="flex items-center gap-4">
                        {/* Display Settings */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full md:w-auto">
                                    <Settings2 className="w-4 h-4 mr-2"/>
                                    Display
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 justify-between">
                                        <div className="flex items-center gap-2">
                                            <ArrowUpDown size="16"/>
                                            <span className="text-sm font-medium">Order by</span>
                                        </div>
                                        <Select value={orderBy} onValueChange={(val) => setOrderBy(val as 'date' | 'type' | 'amount')}>
                                            <SelectTrigger className="w-32">
                                                <SelectValue placeholder="Select order" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="date">Date</SelectItem>
                                                    <SelectItem value="type">Type</SelectItem>
                                                    <SelectItem value="amount">Amount</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Separator />

                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Sort direction</Label>
                                        <RadioGroup value={direction} onValueChange={(val) => setDirection(val as 'asc' | 'desc')} className="flex gap-4">
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="asc" id="asc" />
                                                <Label htmlFor="asc" className="text-sm font-medium">Ascending</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="desc" id="desc" />
                                                <Label htmlFor="desc" className="text-sm font-medium">Descending</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <Separator />

                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Filter by type</Label>
                                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="All types" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All types</SelectItem>
                                                {transactionTypes.map((type) => (
                                                    <SelectItem key={type} value={type}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>

                        {/* Current Sort Indicator */}
                        <div className="text-sm text-muted-foreground hidden md:block">
                            Sorted by: {orderBy === 'date' ? 'Date' :
                                      orderBy === 'type' ? 'Type' : 'Amount'}
                            ({direction === 'asc' ? 'Ascending' : 'Descending'})
                        </div>
                    </div>

                    {/* Search */}
                    <InputGroup className="w-full md:w-80">
                        <InputGroupInput
                            placeholder="Search members..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            {filteredTransactions.length} results
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                {/* Transactions List */}
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((transaction) => (
                                <TransactionRow
                                    key={transaction.id}
                                    data={{
                                        id: transaction.id,
                                        type: transaction.type,
                                        amount: transaction.raw_amount,
                                        created_at: transaction.created_at,
                                        date: transaction.date,
                                        member_name: transaction.member,
                                    }}
                                    variant="teller"
                                />
                            ))
                        ) : (
                            <div className="p-8 text-center text-muted-foreground">
                                {search || typeFilter !== 'all' ?
                                    'No transactions found matching your filters' :
                                    'No transactions found for your account'
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
