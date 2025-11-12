import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as React from "react";
import member from "@/routes/member";
import {NotificationRow} from "@/components/rows/notification";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notifications',
        href: member.notifications().url
    },
];

export default function MemberTransactions() {
    const notifications = [
        {
            title: "Your 2nd period installment payment is due in 3 days.",
            date: "October 10, 2025 · 3:00 PM",
            isRead: false,
        },
        {
            title: "You have received a message from the Loan Officer.",
            date: "October 13, 2025 · 2:25 PM",
            isRead: false,
        },
        {
            title: "Your savings withdrawal request has been processed.",
            date: "October 15, 2025 · 11:00 AM",
            isRead: false,
        },
        {
            title: "Your 1st period installment payment has been successfully processed.",
            date: "October 4, 2025 · 1:32 PM",
            isRead: true,
        },
        {
            title: "Your loan application for ₱25,000 has been approved.",
            date: "October 6, 2025 · 10:15 AM",
            isRead: true,
        },
        {
            title: "A new dividend has been credited to your share capital account.",
            date: "October 8, 2025 · 9:20 AM",
            isRead: true,
        },
    ];


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notifications" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {notifications.map((item, i) => (
                            <NotificationRow key={i} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
