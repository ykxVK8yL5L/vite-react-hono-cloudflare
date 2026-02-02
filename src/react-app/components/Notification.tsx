import { useNotificationStore } from '../stores/notification'
import { Alert, AlertTitle } from '@mui/material'


export function NotificationContainer() {
    const notifications = useNotificationStore((s) => s.notifications)

    return (
        <div className='text-left my-2'>
            {notifications.map((n) => (
                <Alert severity={n.type} key={n.id}>
                    {n.title && <AlertTitle>{n.title}</AlertTitle>}
                    {n.message}
                </Alert>
            ))}
        </div>
    )
}
