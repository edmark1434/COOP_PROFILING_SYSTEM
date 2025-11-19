import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import * as React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Search, Settings2} from "lucide-react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Separator} from "@radix-ui/react-select";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import member from "@/routes/member";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Transactions',
        href: member.myTransactions().url
    },
];

type PageProps = {
    transactions: {
        data: Array<{
            id: number;
            ref_no: string;
            type: string;
            amount: number;
            created_at: string;
            created_at_raw: string;
            member: {
                first_name: string;
                middle_name: string;
                last_name: string;
                suffix: string;
                full_name: string;
            };
            user: {
                name: string;
            } | null;
        }>;
        meta: {
            total: number;
            current_page: number;
            last_page: number;
            from: number;
            to: number;
        };
    };
    filters: {
        search: string;
        order_by: string;
        order_direction: string;
        type: string;
        date_from: string;
        date_to: string;
        per_page: number;
    };
    summary: {
        total_transactions: number;
        total_amount: number;
        average_amount: number;
        type_breakdown: Record<string, { count: number; total: number }>;
    };
    transaction_types: string[];
};

export default function MemberTransactions() {
    const { props } = usePage<PageProps>();
    const { transactions, filters } = props;
    
    const [localSearch, setLocalSearch] = React.useState(filters.search || '');
    const [localOrderBy, setLocalOrderBy] = React.useState(filters.order_by || 'created_at');
    const [localOrderDirection, setLocalOrderDirection] = React.useState(filters.order_direction || 'desc');
    
    // Local filtered and sorted data
    const [displayedTransactions, setDisplayedTransactions] = React.useState(transactions.data);

    // Apply client-side filtering and sorting
    React.useEffect(() => {
        let filtered = [...transactions.data];

        // Apply search filter
        if (localSearch) {
            const searchLower = localSearch.toLowerCase();
            filtered = filtered.filter(transaction => 
                transaction.type.toLowerCase().includes(searchLower) ||
                transaction.ref_no.toLowerCase().includes(searchLower) ||
                transaction.amount.toString().includes(searchLower) ||
                transaction.member.full_name.toLowerCase().includes(searchLower)
            );
        }

        // Apply sorting
        filtered.sort((a, b) => {
            let compareA: any;
            let compareB: any;

            switch (localOrderBy) {
                case 'created_at':
                    compareA = new Date(a.created_at_raw).getTime();
                    compareB = new Date(b.created_at_raw).getTime();
                    break;
                case 'type':
                    compareA = a.type.toLowerCase();
                    compareB = b.type.toLowerCase();
                    break;
                case 'amount':
                    compareA = a.amount;
                    compareB = b.amount;
                    break;
                case 'ref_no':
                    compareA = a.ref_no.toLowerCase();
                    compareB = b.ref_no.toLowerCase();
                    break;
                default:
                    compareA = new Date(a.created_at_raw).getTime();
                    compareB = new Date(b.created_at_raw).getTime();
            }

            if (compareA < compareB) return localOrderDirection === 'asc' ? -1 : 1;
            if (compareA > compareB) return localOrderDirection === 'asc' ? 1 : -1;
            return 0;
        });

        setDisplayedTransactions(filtered);
    }, [localSearch, localOrderBy, localOrderDirection, transactions.data]);

    const handleOrderChange = (value: string) => {
        setLocalOrderBy(value);
    };

    const handleDirectionChange = (value: string) => {
        setLocalOrderDirection(value);
    };

    const formatAmount = (amount: number) => {
        return `₱ ${Number(amount).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Transactions" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-row h-fit w-full justify-between">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">
                                <Settings2 className="w-4 h-4 mr-2"/>
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
                                        value={localOrderBy} 
                                        onValueChange={handleOrderChange}
                                    >
                                        <SelectTrigger className="w-34">
                                            <SelectValue placeholder="Select order" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="created_at">Date</SelectItem>
                                                <SelectItem value="type">Type</SelectItem>
                                                <SelectItem value="amount">Amount</SelectItem>
                                                <SelectItem value="ref_no">Reference No</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Separator className="bg-gray-300 h-px" />
                                <div className="flex items-center w-full gap-4 p-3">
                                    <RadioGroup 
                                        value={localOrderDirection} 
                                        onValueChange={handleDirectionChange}
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
                            placeholder="Search" 
                            value={localSearch}
                            onChange={(e) => setLocalSearch(e.target.value)}
                        />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {displayedTransactions.length > 0 ? (
                            displayedTransactions.map((transaction) => (
                                <div 
                                    key={transaction.id}
                                    className="flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors"
                                >
                                    <div className="flex-1 min-w-[200px]">
                                        <p className="font-semibold text-sm capitalize">{transaction.type.toLowerCase()}</p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {transaction.created_at}
                                        </p>
                                    </div>
                                    <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                                        {formatAmount(transaction.amount)}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center p-8 text-muted-foreground">
                                No transactions found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}