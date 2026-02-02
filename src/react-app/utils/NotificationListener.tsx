import { useEvent, NotifyPayload } from './bus'
import { useNotificationStore } from '../stores/notification'
import { nanoid } from 'nanoid'


export function NotificationListener() {
    const add = useNotificationStore((s) => s.add)
    const remove = useNotificationStore((s) => s.remove)

    useEvent('notify', (payload: NotifyPayload) => {
        const id = payload.id ?? nanoid()

        add({
            id,
            type: payload.type ?? 'info',
            title: payload.title ?? '',
            message: payload.message
        })

        const duration = payload.duration ?? 4000
        setTimeout(() => remove(id), duration)
    })
    return null
}
