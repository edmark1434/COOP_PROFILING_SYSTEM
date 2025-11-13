import * as React from "react"
import { cn } from "@/lib/utils"

interface TransactionRowProps extends React.ComponentProps<"div"> {
    data? : any
}

export function TransactionRow({
                                        data,
                                        className,
                                        ...props
                                    }: TransactionRowProps) {
    return (
        <div
            data-slot="transaction-row"
            className={cn(
                "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors",
                className
            )}
            {...props}
        >
            <div className="flex-1 min-w-[200px]">
                <p className="font-semibold text-sm">{data?.type}</p>
                <p className="text-xs text-muted-foreground">{data?.created_at?.split(" ")[0] + " "+ new Date(data?.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}</p>
            </div>

            {data?.member && data?.user && (
                <div className="flex-1 min-w-[200px] mt-2 md:mt-0">
                    <p className="text-xs text-muted-foreground">Member: {data?.member?.first_name + " " + (data?.member?.middle_name ?? "") + " " + data?.member?.last_name + " "+ (data?.member?.suffix ?? "")}</p>
                    <p className="text-xs text-muted-foreground">Processed by: {data?.user.name}</p>
                </div>
            )}

            <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                ₱ {Number(data?.amount).toLocaleString("en-US")}
            </div>
        </div>
    )
}
