import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

import { TransactionRow } from "@/components/rows/transaction"
import { LoanRow } from "@/components/rows/loan"
import {StaffRow} from "@/components/rows/staff";
import {AuditLogRow} from "@/components/rows/audit-log";
import {TellerTransactionRow} from "@/components/rows/teller-transaction";
import {InstallmentRow} from "@/components/rows/installment";

// Map tab.value -> component
const rowComponentRegistry: Record<string, React.ComponentType<{ data: any }>> = {
    transactions: TellerTransactionRow,
    loans: LoanRow,
    staff: StaffRow,
    auditLogs: AuditLogRow,
    installments: InstallmentRow,
}

interface TabConfig {
    value: string
    label: string
    content?: React.ReactNode
    columns?: string[]
    data?: Record<string, any>[]
    RowComponent?: React.ComponentType<{ data: any }> // optional override
}

interface TabbedTableProps extends React.ComponentProps<"div"> {
    tabs: TabConfig[]
    defaultTab?: string
    variant?: "bordered" | "plain"
}

export function TabbedTable({
                                tabs,
                                defaultTab,
                                variant = "bordered",
                                className,
                                ...props
                            }: TabbedTableProps) {
    return (
        <div
            className={cn(
                "flex flex-col w-full rounded-xl bg-card text-card-foreground overflow-hidden",
                variant === "bordered" && "border",
                className
            )}
            {...props}
        >
            <Tabs defaultValue={tabs[0]?.value} className="w-full">
                {/* Tabs header */}
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* Tabs content */}
                {tabs.map((tab) => {
                    // Determine which row component to use
                    const RowComponent =
                        tab.RowComponent || rowComponentRegistry[tab.value.split("-")[0]] || null

                    return (
                        <TabsContent
                            key={tab.value}
                            value={tab.value}
                            className="w-full overflow-x-auto"
                        >
                            {tab.data && tab.data.length > 0 ? (
                                RowComponent ? (
                                    // ✅ Use a registered or provided custom row component
                                    <div className="divide-y">
                                        {tab.data.map((item, i) => (
                                            <RowComponent key={i} data={item} />
                                        ))}
                                    </div>
                                ) : (
                                    // 🧱 Fallback to default <table> layout
                                    <Table>
                                        {tab.columns && (
                                            <TableHeader>
                                                <TableRow>
                                                    {tab.columns.map((col, i) => (
                                                        <TableHead key={i}>{col}</TableHead>
                                                    ))}
                                                </TableRow>
                                            </TableHeader>
                                        )}
                                        <TableBody>
                                            {tab.data.map((row, i) => (
                                                <TableRow key={i} className="border-b">
                                                    {Object.values(row).map((val, j) => (
                                                        <TableCell key={j}>{val}</TableCell>
                                                    ))}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )
                            ) : (
                                tab.content || (
                                    <div className="text-center text-muted-foreground p-6">
                                        No data available
                                    </div>
                                )
                            )}
                        </TabsContent>
                    )
                })}
            </Tabs>
        </div>
    )
}
