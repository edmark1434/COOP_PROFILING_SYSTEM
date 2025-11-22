import * as React from "react"
import { cn } from "@/lib/utils"

interface ProfileCardProps extends React.ComponentProps<"div"> {
    title?: string
    type? : "member" | "staff" | "member-loan"
    data? : any
}

export function ProfileCard({
                                title="Profile",
                                type,
                                data,
                                className,
                               ...props
                           }: ProfileCardProps) {

    // Debug logging to check what data is received
    React.useEffect(() => {
        console.log('ProfileCard received data:', data);
    }, [data]);

    return (
        <div
            data-slot="profile-card"
            className={cn(
                "bg-card h-fit w-full text-card-foreground flex flex-col justify-between rounded-xl border",
                className
            )}
            {...props}
        >
            <div className="flex flex-col p-5 py-2.5 border-b">
                <div className="text-sm font-medium text-foreground">{title}</div>
            </div>

            {type=="member" && (
                <div className="flex flex-row p-5 gap-4 justify-between">
                    <div className="flex flex-col justify-center min-w-[30%]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="rounded-full aspect-square bg-muted w-16 h-16 flex items-center justify-center border-b">
                                <p className="font-semibold text-2xl">{data.initial}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="font-semibold text-md">{ data.name}</p>
                                <p className="text-xs text-muted-foreground">Member ID: {data.id}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full items-end">
                        <div className="flex flex-col gap-3 w-[50%]">
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Joined Since</p>
                                <p className="text-sm font-semibold text-foreground">{data?.dateJoined?.split("T")[0] + " "+ new Date(data?.dateJoined).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="text-sm font-semibold text-foreground">{data.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[50%]">
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Contact</p>
                                <p className="text-sm font-semibold text-foreground">{data.contact}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Status</p>
                                <p className="text-sm font-semibold text-foreground">{data.status}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[25%] text-right">
                            <div className="flex flex-col">
                                <p className="text-xs text-muted-foreground">Share Capital</p>
                                <p className="text-sm font-semibold text-foreground">₱ {Number(data?.shareCapital ?? 0).toLocaleString("en-US")}</p>
                            </div>
                            <div className="flex flex-col ">
                                <p className="text-xs text-muted-foreground">Delinquency Rate</p>
                                <p className={`text-sm font-semibold ${
                                    (data.delinquencyRate || 0) >= 10 ? 'text-primary' : 'text-foreground'
                                }`}>
                                    {(data.delinquencyRate || 0)}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {type=="member-loan" && (
                <div className="flex flex-col p-5 gap-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="rounded-full aspect-square bg-muted w-16 h-16 flex items-center justify-center border-b">
                                <p className="font-semibold text-2xl">{data.initial}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="font-semibold text-md">{data.name}</p>
                                <p className="text-xs text-muted-foreground">Member ID: {data.id}</p>
                            </div>
                        </div>
                        <div className="flex-1 w-fit text-right">
                            <div className="flex flex-col ">
                                <p className="text-xs text-muted-foreground">Delinquency Rate</p>
                                <p className={`text-sm font-semibold ${
                                    (data.delinquencyRate || 0) >= 10 ? 'text-primary' : 'text-foreground'
                                }`}>
                                    {(data.delinquencyRate || 0)}%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <p className="text-xs text-muted-foreground">Share Capital</p>
                        <p className="font-semibold text-sm text-right">₱ {Number(data?.shareCapital ?? 0).toLocaleString("en-US")}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
                            <p className="text-xs text-muted-foreground">Joined Since</p>
                            <p className="text-xs text-muted-foreground text-right">{data?.dateJoined?.split("T")[0] + " "+ new Date(data?.dateJoined).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}</p>
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
            )}
            {type=="staff" && (
                <div className="flex flex-row p-5 gap-4 justify-between">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="rounded-full aspect-square bg-muted w-16 h-16 flex items-center justify-center border-b">
                                <p className="font-semibold text-2xl">{data.initial}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="font-semibold text-md">{data.name}</p>
                                <p className="text-xs text-muted-foreground">Staff ID: {data.id}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-[50%]">
                        <div className="flex flex-col gap-2 w-[50%]">
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Type</p>
                                <p className="text-sm font-semibold text-foreground">{data.type}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Joined Since</p>
                                <p className="text-sm font-semibold text-foreground">{data?.created_at?.split("T")[0] + " "+ new Date(data?.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-[50%]">
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Status</p>
                                <p className="text-sm font-semibold text-foreground">{data.status}</p>
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="text-sm font-semibold text-foreground">{data.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
