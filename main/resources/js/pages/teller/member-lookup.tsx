import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import * as React from "react";
import {Search} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import teller from "@/routes/teller";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Member Lookup',
        href: teller.memberLookup().url
    },
];

export default function TellerMemberLookup() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Member Lookup" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto w-full items-center">

                <div className="flex flex-col h-full w-full gap-4 justify-center items-center pb-16 bg-[radial-gradient(ellipse_at_bottom,#dc2626aa_0%,#dc262654_40%,transparent_85%)]
">
                    <div className="flex ">
                        <p className="text-sm text-secondary-foreground">Look up a member’s information by ID</p>
                    </div>
                    <InputGroup className="w-sm bg-background">
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
