import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import loanOfficer from "@/routes/loan-officer";
import * as React from "react";
import {Search} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Member Lookup',
        href: loanOfficer.memberLookup().url
    },
];

export default function LoanOfficerMemberLookup() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Member Lookup" />
            <div className="bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,0,0.55),rgba(255,0,0,0.10),rgba(255,255,255,1))] flex h-full flex-1 flex-col gap-4 overflow-x-auto w-full items-center">

                <div className="flex flex-col h-full w-full gap-4 justify-center items-center">
                    <div className="flex ">
                        <p className="text-sm text-secondary-foreground">Look up a member’s information by ID</p>
                    </div>
                    <InputGroup className="w-sm">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        </AppLayout>
    );
}
