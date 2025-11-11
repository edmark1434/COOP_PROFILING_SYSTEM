import {Plus, Settings, Trash} from "lucide-react"
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
    "/member/profile": (
        <Button variant="destructive">Suspend</Button>
    ),

}
