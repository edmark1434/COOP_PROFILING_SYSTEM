import * as React from "react"
import { cn } from "@/lib/utils"
import {
    OverviewCard,
    OverviewCardContent, OverviewCardFooter,
    OverviewCardHeader,
    OverviewCardTitle,
    OverviewCardValue
} from "@/components/ui/overview-card";

interface ProfileCardProps extends React.ComponentProps<"div"> {
    data? : any
}

export function ProfileCard({
                               data,
                               className,
                               ...props
                           }: ProfileCardProps) {
    return (
        <div
            data-slot="profile-card"
            className={cn(
                "bg-card text-card-foreground flex flex-col justify-between rounded-xl border",
                className
            )}
            {...props}
        >
            <div className="flex flex-col p-5 py-2.5 border-b">
                <div className="text-sm font-medium text-gray-600">Profile</div>
            </div>
            <div className="flex flex-col p-5 gap-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="rounded-full bg-muted w-16 h-16 flex items-center justify-center border-b">
                            <p className="font-semibold text-2xl">{data.initial}</p>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <p className="font-semibold text-md">{data.member}</p>
                            <p className="text-xs text-muted-foreground">Member ID: {data.id}</p>
                        </div>
                    </div>
                    <div className="flex-1 w-fit text-right">
                        <p className="text-xs text-muted-foreground">Delinquency Rate</p>
                        <p className="font-semibold text-(--color-chart-5) text-lg">{data.rate}%</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <p className="text-xs text-muted-foreground">Share Capital</p>
                    <p className="font-semibold text-sm text-right">{data.shareCapital}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
                        <p className="text-xs text-muted-foreground">Joined Since</p>
                        <p className="text-xs text-muted-foreground text-right">{data.dateJoined}</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-xs text-muted-foreground text-right">{data.email}</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
                        <p className="text-xs text-muted-foreground">Contact Number</p>
                        <p className="text-xs text-muted-foreground text-right">{data.contact}</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <p className="text-xs text-muted-foreground">Status</p>
                        <p className="text-xs text-muted-foreground text-right">{data.status}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
