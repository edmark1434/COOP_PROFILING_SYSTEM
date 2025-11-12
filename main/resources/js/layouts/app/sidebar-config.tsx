import {
    LayoutGrid,
    Banknote,
    Receipt,
    Bell,
    Search,
    FileText,
    Users,
    UserCog,
} from "lucide-react"


import {NavItem} from "@/types";
import member from "@/routes/member";
import teller from "@/routes/teller";
import loanOfficer from "@/routes/loan-officer";
import admin from "@/routes/admin";

export const sidebarConfigs: Record<
    string,
    NavItem[]
> = {
    member: [
        {
            title: "Overview",
            href: member.overview(),
            icon: LayoutGrid,
        },
        {
            title: "My Transactions",
            href: member.myTransactions(),
            icon: Banknote,
        },
        {
            title: "My Loans",
            href: member.myLoans(),
            icon: Receipt,
        },
        {
            title: "Notifications",
            href: member.notifications(),
            icon: Bell,
        },
    ],

    teller: [
        {
            title: "Overview",
            href: teller.overview(),
            icon: LayoutGrid,
        },
        {
            title: "Transactions",
            href: teller.transactions(),
            icon: Receipt,
        },
        {
            title: "Member Lookup",
            href: teller.memberLookup(),
            icon: Search,
        },
    ],

    "loan-officer": [
        {
            title: "Overview",
            href: loanOfficer.overview(),
            icon: LayoutGrid,
        },
        {
            title: "Loan Applications",
            href: loanOfficer.loanApplications(),
            icon: FileText,
        },
        {
            title: "Active Loans",
            href: loanOfficer.activeLoans(),
            icon: Receipt,
        },
        {
            title: "Member Lookup",
            href: loanOfficer.memberLookup(),
            icon: Search,
        },
    ],

    admin: [
        {
            title: "Overview",
            href: admin.overview(),
            icon: LayoutGrid,
        },
        {
            title: "Members",
            href: admin.members(),
            icon: Users,
        },
        {
            title: "Accounts",
            href: admin.accounts(),
            icon: Banknote,
        },
        {
            title: "Loans",
            href: admin.loans(),
            icon: Receipt,
        },
        {
            title: "Transactions",
            href: admin.transactions(),
            icon: FileText,
        },
        {
            title: "Staff",
            href: admin.staff(),
            icon: UserCog,
        },
    ],
}
