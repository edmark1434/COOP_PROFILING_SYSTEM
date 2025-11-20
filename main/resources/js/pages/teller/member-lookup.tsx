import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Member Lookup" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto w-full items-center">

                <div className="flex flex-col h-full w-full gap-4 justify-center items-center pb-16 bg-[radial-gradient(ellipse_at_bottom,#dc2626aa_0%,#dc262654_40%,transparent_85%)]
">
                    <div className="flex">
                        <p className="text-sm text-secondary-foreground">Look up a member’s information by ID</p>
                    </div>
                    <div className="w-sm flex gap-2">
                        <MemberCombobox
                            value=""
                            onValueChange={()=>{}}
                            invalid={false}
                        />
                        <Button type="button" size="icon"
                                onClick={() => (()=>{})}
                        >
                            <Search/>
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
