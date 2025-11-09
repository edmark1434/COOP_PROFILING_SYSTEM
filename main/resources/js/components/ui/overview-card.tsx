import * as React from "react";
import { cn } from "@/lib/utils";

function OverviewCard({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="overview-card"
            className={cn(
                "bg-card text-card-foreground flex flex-col justify-between rounded-xl border",
                className
            )}
            {...props}
        />
    );
}

function OverviewCardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="overview-card-header"
            className={cn("flex flex-col p-5 py-2.5 border-b", className)}
            {...props}
        />
    );
}

function OverviewCardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <h3
            data-slot="overview-card-title"
            className={cn("text-sm font-medium text-gray-600", className)}
            {...props}
        />
    );
}

function OverviewCardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="overview-card-content"
            className={cn("flex flex-col p-5", className)}
            {...props}
        />
    );
}

function OverviewCardValue({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="overview-card-value"
            className={cn("text-2xl font-semibold text-red-600", className)}
            {...props}
        />
    );
}

function OverviewCardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="overview-card-footer"
            className={cn("text-xs text-gray-500 mt-1", className)}
            {...props}
        />
    );
}

export {
    OverviewCard,
    OverviewCardHeader,
    OverviewCardTitle,
    OverviewCardContent,
    OverviewCardValue,
    OverviewCardFooter,
};
