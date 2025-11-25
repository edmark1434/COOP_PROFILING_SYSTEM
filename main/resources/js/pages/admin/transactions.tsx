import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import admin from "@/routes/admin";
import { useState, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Search, Settings2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { TransactionRow } from "@/components/rows/transaction";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Transactions',
    href: admin.transactions().url
  },
];

interface Transaction {
  id: number;
  type: string;
  date: string;
  amount: number;
  member: {
    first_name: string;
    middle_name: string;
    last_name: string;
    suffix: string;
    full_name: string;
  };
  user: { name: string };
}

interface AdminTransactionsProps {
  transactions: Transaction[];
}

export default function AdminTransactions({ transactions }: AdminTransactionsProps) {
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState<"name" | "date" | "type">("date");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const filteredTransactions = useMemo(() => {
    let data = [...transactions];

    // 🔍 Search filter
    if (search.trim() !== "") {
      const searchLower = search.toLowerCase();
      data = data.filter((t) =>
        t.member.full_name.toLowerCase().includes(searchLower) ||
        t.type.toLowerCase().includes(searchLower) ||
        t.user.name.toLowerCase().includes(searchLower)
      );
    }

    // 🔃 Sorting logic
    data.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      if (orderBy === "name") {
        aValue = a.member.full_name;
        bValue = b.member.full_name;
      } else if (orderBy === "type") {
        aValue = a.type;
        bValue = b.type;
      } else {
        // Sort by date
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return direction === "asc"
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number);
      }
    });

    return data;
  }, [transactions, search, orderBy, direction]);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Transactions" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        {/* --- Header Controls --- */}
        <div className="flex flex-row h-fit w-full justify-between items-start gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Settings2 className="w-4 h-4" />
                Display
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-0">
              <div className="grid">
                <div className="flex items-center w-full gap-4 p-3 justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown size="16" />
                    <span className="text-sm font-medium">Order by</span>
                  </div>
                  <Select
                    value={orderBy}
                    onValueChange={(val) => setOrderBy(val as "name" | "date" | "type")}
                  >
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
                  <RadioGroup
                    value={direction}
                    onValueChange={(val) => setDirection(val as "asc" | "desc")}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="asc" id="asc" />
                      <span className="text-sm font-medium">Ascending</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="desc" id="desc" />
                      <span className="text-sm font-medium">Descending</span>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <InputGroup className="w-full sm:w-sm">
            <InputGroupInput
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroupAddon>
              <Search className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              {filteredTransactions.length} results
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* --- Transactions List --- */}
        <div className="relative flex-1 h-fit overflow-x-auto rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
          <div className="divide-y h-fit">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((item) => (
                <TransactionRow
                  key={item.id}
                  data={{
                    id: item.id,
                    type: item.type,
                    member: item.member,
                    user: item.user,
                    amount: item.amount,
                    created_at: item.date
                  }}
                />
              ))
            ) : (
              <div className="p-6 text-center text-muted-foreground text-sm">
                No transactions found.
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
