import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

import * as React from "react";
import {Search} from "lucide-react";
import teller from "@/routes/teller";
import {MemberCombobox} from "@/components/member-combobox";
import {Button} from "@/components/ui/button";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Member Lookup',
        href: teller.memberLookup().url
    },
];

export default function TellerMemberLookup() {
    const [selectedMemberId, setSelectedMemberId] = React.useState<string>("");
    const [isInvalid, setIsInvalid] = React.useState(false);

    const handleSearch = () => {
        if (!selectedMemberId) {
            setIsInvalid(true);
            return;
        }
        
        setIsInvalid(false);
        router.get(`/teller/member-lookup/${selectedMemberId}`);
    };

    const handleMemberSelect = (memberId: string) => {
        setSelectedMemberId(memberId);
        setIsInvalid(false);
        
        // Auto-redirect when a member is selected
        if (memberId) {
            router.get(`/teller/member-lookup/${memberId}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Member Lookup" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto w-full items-center">

                <div className="flex flex-col h-full w-full gap-4 justify-center items-center pb-16 bg-[radial-gradient(ellipse_at_bottom,#dc2626aa_0%,#dc262654_40%,transparent_85%)]
">
                    <div className="flex">
                        <p className="text-sm text-secondary-foreground">Look up a member's information by ID</p>
                    </div>
                    <div className="w-sm flex gap-2">
                        <MemberCombobox
                            value={selectedMemberId}
                            onValueChange={handleMemberSelect}
                            invalid={isInvalid}
                        />
                        <Button type="button" size="icon"
                                onClick={handleSearch}
                        >
                            <Search/>
                        </Button>
                    </div>
                    {isInvalid && (
                        <p className="text-sm text-red-500 mt-2">Please select a member</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}