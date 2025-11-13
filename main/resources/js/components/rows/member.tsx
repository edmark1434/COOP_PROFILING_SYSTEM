import * as React from "react"
import { cn } from "@/lib/utils"
import {Badge} from "@/components/ui/badge";

interface MemberRowProps extends React.ComponentProps<"div"> {
    isMember? : boolean
    data? : any
}

export function MemberRow({
                                data,
                                className,
                                ...props
                               }: MemberRowProps) {
    return (
        <div
            data-slot="member-row"
            className={cn(
                "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors",
                className
            )}
            {...props}
        >
            <div className="flex flex-row gap-4">
                <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                    <p className="font-semibold text-sm">{data.initial}</p>
                </div>

                <div className="flex-1 min-w-[200px]">
                    <p className="font-semibold text-sm">{data.menamember}</p>
                    <p className="text-xs text-muted-foreground">{data.date}</p>
                </div>
            </div>

            <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                {data.amount}
            </div>
        </div>
    )
}
