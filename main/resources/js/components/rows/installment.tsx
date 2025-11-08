import * as React from "react"
import { cn } from "@/lib/utils"
import {Badge} from "@/components/ui/badge";

interface InstallmentRowProps extends React.ComponentProps<"div"> {
    data? : any
}

export function InstallmentRow({
                                        data,
                                        className,
                                        ...props
                                    }: InstallmentRowProps) {
    return (
        <div
            data-slot="installment-row"
            className={cn(
                "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors",
                className
            )}
            {...props}
        >
            <div className="flex-1 min-w-[200px]">
                <p className="font-semibold text-sm">{data.date}</p>
                <Badge variant={data.badgeType}>
                    {data.status}
                </Badge>
            </div>

            <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                {data.amount}
            </div>
        </div>
    )
}
