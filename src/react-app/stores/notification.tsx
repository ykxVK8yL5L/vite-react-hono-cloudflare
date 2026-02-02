import { create } from 'zustand'

export type Notification = {
    id: string
    type: 'success' | 'error' | 'info' | 'warning'
    title: string
    message: string
}

type NotificationState = {
    notifications: Notification[]
    add: (n: Notification) => void
    remove: (id: string) => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
    notifications: [],
    add: (n) =>
        set((s) => ({
            notifications: [...s.notifications, n],
        })),
    remove: (id) =>
        set((s) => ({
            notifications: s.notifications.filter((n) => n.id !== id),
        })),
}))