import * as React from "react"
import { cn } from "@/lib/utils"

interface StaffRowProps extends React.ComponentProps<"div"> {
    data? : any
}

export function StaffRow({
                                   data,
                                   className,
                                   ...props
                               }: StaffRowProps) {
    return (
        <div
            data-slot="staff-row"
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
                    <p className="font-semibold text-sm">{data.member}</p>
                    <p className="text-xs text-muted-foreground">{data.type}</p>
                </div>
            </div>
        </div>
    )
}
