import { Check, Plus, Settings, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, router } from '@inertiajs/react';
import loanApplicationForm from "@/routes/member/loanApplicationForm";
import staffAddForm from "@/routes/admin/staffAddForm";
// import { loanApplicationForm } from "@/routes/member";


const handleMarkAllAsRead = () => {
    router.patch('/member/notifications/mark-all-as-read', {}, {
        preserveScroll: true,
    });
};

export const headerConfigs: Record<string, React.ReactNode> = {
    "/admin/staff/": (
        <>
            <Button variant="secondary"><Settings /> Change Role</Button>
            <Button variant="destructive">Suspend</Button>
        </>
    ),
    "/admin/staff": (
        <>
            <Link href={staffAddForm.get()}>
                <Button variant="secondary"><Plus /> Add Staff</Button>
            </Link>
        </>
    ),
    "/teller/transactions": (
        <Link href="/teller/add-transaction">
            <Button variant="secondary"><Plus /> Add Transaction</Button>
        </Link>
    ),
    "/teller/member-lookup": (
        <Link href="/teller/register-member">
            <Button variant="secondary"><Plus /> Register Member</Button>
        </Link>
    ),
    "/member/profile": (
        <Button variant="destructive">Suspend</Button>
    ),
    "/member/my-loans": (
        <Link href={loanApplicationForm.get()}>
            <Button variant="secondary"><Plus /> Apply for loan</Button>
        </Link>
    ),
    "/member/notifications": (
        <Button variant="secondary" onClick={handleMarkAllAsRead}>
            <Check /> Mark all as read
        </Button>
    ),
}