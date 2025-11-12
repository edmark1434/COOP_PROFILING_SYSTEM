import * as React from "react"
import { cn } from "@/lib/utils"
import {Badge} from "@/components/ui/badge";

interface LoanRowProps extends React.ComponentProps<"div"> {
    isMember? : boolean
    data? : any
}

export function LoanRow({
                                isMember=false,
                                data,
                                className,
                                ...props
                               }: LoanRowProps) {
    return (
        <div
            data-slot="loan-row"
            className={cn(
                "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors",
                className
            )}
            {...props}
        >
            <div className="flex flex-row gap-4">
                {isMember==true && (
                    <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                        <p className="font-semibold text-sm">{data.initial}</p>
                    </div>
                )}
                <div className="flex-1 min-w-[200px]">
                    <p className="font-semibold text-sm">{data.member}</p>
                    {data.status && isMember==true && (
                        <Badge variant="secondary">{data.status}</Badge>
                    )}
                    {data.type && (
                        <p className="text-xs text-muted-foreground">{data.type}</p>
                    )}
                </div>
            </div>

            {data.remarks && (
                <div className="text-left text-xs text-muted-foreground min-w-44 md:mt-0 mt-2">
                    Remarks: {data.remarks}
                </div>
            )}

            {data.status && isMember==false &&  (
                <div className="text-left min-w-44 md:mt-0 mt-2">
                    <Badge variant="secondary">{data.status}</Badge>
                </div>
            )}

            <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                {data.amount}
            </div>
        </div>
    )
}
