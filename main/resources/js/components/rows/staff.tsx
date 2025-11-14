import * as React from "react"
import { cn } from "@/lib/utils"

interface StaffRowProps extends React.ComponentProps<"div"> {
    data?: any,
    category?: string,
}

export function StaffRow({
    data,
    className,
    category,
    ...props
}: StaffRowProps) {
    const getInitials = (name: string) => {
        const names = name.split(" ").filter(n => n.length > 0); // Filter out empty strings
        const initials = names.map((n) => n.charAt(0).toUpperCase());
        
        // Take only first 2 letters maximum
        if (initials.length > 2) {
            return initials[0] + initials[initials.length - 1]; // First and last initial
        }
        
        return initials.slice(0, 2).join(""); // Take up to 2 initials
    };

    const getRoleName = (user: any) => {
        if (user.is_admin) return 'Admin';
        if (user.is_loan_officer) return 'Loan Officer';
        if (user.is_teller) return 'Teller';
        return 'Staff';
    };

    const formatJoinDate = (dateString: string) => {
        // Check if dateString is null, undefined, empty, or just whitespace
        if (!dateString || dateString.trim() === '') {
            return 'Not available';
        }
        
        try {
            const date = new Date(dateString);
            // Check if the date is valid
            if (isNaN(date.getTime())) {
                return 'Not available';
            }
            
            // Format the date properly
            const datePart = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            const timePart = date.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true 
            }).toUpperCase();
            
            return `${datePart} ${timePart}`;
        } catch (error) {
            return 'Not available';
        }
    };

    return (
        <div
            data-slot="staff-row"
            className={cn(
                "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors",
                className
            )}
            {...props}
        >
            <div className="flex flex-row gap-4 items-center">
                {/* Staff initials */}
                <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                    <p className="font-semibold text-sm">
                        {getInitials(data?.name ?? "U")}
                    </p>
                </div>

                {/* Staff info */}
                <div className="flex-1 min-w-[200px]">
                    <p className="font-semibold text-sm">
                        {data?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {data?.email}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Joined: {formatJoinDate(data?.email_verified_at)}
                    </p>
                </div>
            </div>

            {/* Role/Type */}
            <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
                <p>Role: {getRoleName(data) ?? '—'}</p>
                <p>Status: {data?.email_verified_at ? 'Verified' : 'Pending'}</p>
            </div>
        </div>
    );
}