import {Check, Plus, Settings, Trash} from "lucide-react"
import { Button } from "@/components/ui/button"

export const headerConfigs: Record<string, React.ReactNode> = {
    "/admin/staff/": (
        <>
            <Button variant="secondary"><Settings /> Change Role</Button>
            <Button variant="destructive">Suspend</Button>
        </>
    ),
    "/admin/staff": (
        <>
            <Button variant="secondary"><Plus /> Add Staff</Button>
        </>
    ),
    "/teller/transactions": (
        <>
            <Button variant="secondary"><Plus /> Add Transaction</Button>
        </>
    ),
    "/member/profile": (
        <Button variant="destructive">Suspend</Button>
    ),
    "/member/my-loans": (
        <Button variant="secondary"><Plus /> Apply for loan</Button>
    ),
    "/member/notifications": (
        <Button variant="secondary"><Check /> Mark all as read</Button>
    ),

}
