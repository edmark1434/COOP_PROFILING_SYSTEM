import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, router } from '@inertiajs/react';
import * as React from "react";
import member from "@/routes/member";
import {NotificationRow} from "@/components/rows/notification";

interface PageProps {
    notifications: Array<{
        id: number;
        title: string;
        date: string;
        isRead: boolean;
    }>;
    [key: string]: any;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notifications',
        href: member.notifications().url
    },
];

export default function MemberNotifications() {
    const { props } = usePage<PageProps>();
    const { notifications } = props;

    const handleNotificationClick = (id: number, isRead: boolean) => {
        // Only mark as read if it's not already read
        if (!isRead) {
            router.patch(`/member/notifications/${id}/mark-as-read`, {}, {
                preserveScroll: true,
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notifications" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative h-fit overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="divide-y h-fit">
                        {notifications.map((item, i) => (
                            <div 
                                key={i} 
                                onClick={() => handleNotificationClick(item.id, item.isRead)}
                                className={item.isRead ? '' : 'cursor-pointer'}
                            >
                                <NotificationRow data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}