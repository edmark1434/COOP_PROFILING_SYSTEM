import * as React from "react"
import { cn } from "@/lib/utils"
import {useState} from "react";
import {Badge} from "@/components/ui/badge";

interface LoanRowProps extends React.ComponentProps<"div"> {
    isMember? : boolean
    data? : any
}

export function LoanRow({
  isMember,
  data,
  className,
  ...props
}: LoanRowProps) {
  const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names.map((n) => n.charAt(0).toUpperCase());
    return initials.join("");
  };

  return (
    <div
      data-slot="loan-row"
      className={cn(
        "flex flex-col md:flex-row justify-between items-start md:items-center border-b px-4 py-3 hover:bg-muted/40 transition-colors",
        className
      )}
      {...props}
    >
      <div className="flex flex-row gap-4 items-center">
        {/* Member initials */}
        <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
          <p className="font-semibold text-sm">
            {getInitials(
              (data?.member?.first_name ?? "") +
                " " +
                (data?.member?.last_name ?? "")
            )}
          </p>
        </div>

        {/* Member info */}
        <div className="flex-1 min-w-[200px]">
          <p className="font-semibold text-sm">
            {data?.member?.first_name} {data?.member?.middle_name ?? ""}{" "}
            {data?.member?.last_name} {data?.member?.suffix ?? ""}
          </p>
          <p className="text-xs text-muted-foreground">
            {data?.purpose?.name}
          </p>
        </div>

        {/* Member-only initial */}
        {isMember && (
          <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
            <p className="font-semibold text-sm">
              {getInitials(
                (data?.member?.first_name ?? "") +
                  " " +
                  (data?.member?.last_name ?? "")
              )}
            </p>
          </div>
        )}

        {/* Status & type */}
        <div className="flex-1 min-w-[200px]">
          <p className="font-semibold text-sm">
            {data?.member?.first_name} {data?.member?.last_name}
          </p>
          {data?.status && <Badge variant="secondary">{data.status}</Badge>}
          {data?.type && (
            <p className="text-xs text-muted-foreground">{data.type}</p>
          )}
        </div>
      </div>

      {/* Remarks */}
      {data?.remarks && (
        <div className="text-left text-xs text-muted-foreground min-w-44 md:mt-0 mt-2">
          Remarks: {data.remarks}
        </div>
      )}

      {/* Amount */}
      <div className="text-right font-semibold text-sm min-w-[100px] md:mt-0 mt-2">
        ₱ {Number(data?.amount ?? 0).toLocaleString("en-US")}
      </div>
    </div>
  );
}
