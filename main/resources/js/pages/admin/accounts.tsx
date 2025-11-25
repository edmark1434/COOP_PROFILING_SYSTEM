import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import admin, { accountView } from "@/routes/admin";
import * as React from "react";
import { AccountRow } from "@/components/rows/account";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Accounts',
        href: admin.accounts().url
    },
];

interface Account {
    id: number;
    type: string;
    balance: number;
    name: string;
}

interface AdminAccountsProps {
    accounts: Account[];
}

export default function AdminAccounts({ accounts }: AdminAccountsProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Accounts List */}
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {accounts.length > 0 ? (
                            accounts.map((account) => (
                            <Link href={accountView(account.id)}>
                                <AccountRow 
                                    key={account.id} 
                                    data={account} 
                                />
                            </Link>
                            ))
                        ) : (
                            <div className="p-6 text-center text-muted-foreground text-sm">
                                No accounts found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}