import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import loanOfficer from "@/routes/loan-officer";
import * as React from "react";
import {Search} from "lucide-react";
import {MemberCombobox} from "@/components/member-combobox";
import {Button} from "@/components/ui/button";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Member Lookup',
        href: loanOfficer.memberLookup().url
    },
];

interface Member {
    id: string;
    name: string;
}

interface MemberLookupProps {
    members: Member[];
}

// Transform members to the format expected by MemberCombobox
const transformMembersToItems = (members: Member[]) => {
    return members.map(member => ({
        value: member.id,
        label: member.name
    }));
};

export default function LoanOfficerMemberLookup({ members }: MemberLookupProps) {
    const [selectedMemberId, setSelectedMemberId] = React.useState("");

    const handleSearch = () => {
        if (selectedMemberId) {
            router.visit(loanOfficer.memberProfile(selectedMemberId).url);
        }
    };

    const handleMemberSelect = (value: string) => {
        setSelectedMemberId(value);
        // Automatically navigate when a member is selected
        if (value) {
            router.visit(loanOfficer.memberProfile(value).url);
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Member Lookup" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto w-full items-center">
                <div className="flex flex-col h-full w-full gap-4 justify-center items-center pb-16 bg-[radial-gradient(ellipse_at_bottom,#dc2626aa_0%,#dc262654_40%,transparent_85%)]">
                    <div className="flex">
                        <p className="text-sm text-secondary-foreground">Look up a member's information by ID</p>
                    </div>
                    <div className="w-sm flex gap-2" onKeyPress={handleKeyPress}>
                        <MemberCombobox
                            value={selectedMemberId}
                            onValueChange={handleMemberSelect}
                            invalid={false}
                        />
                        <Button
                            type="button"
                            size="icon"
                            onClick={handleSearch}
                            disabled={!selectedMemberId}
                        >
                            <Search/>
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
