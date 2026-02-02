import { eventBus } from '../utils/bus'
export function initNotificationEffect() {
    const handler = (payload: {
        message: string
        type?: 'success' | 'error'
    }) => {
        console.log(payload.message)
    }

    eventBus.on('notification:show', handler)

    return () => {
        eventBus.off('notification:show', handler)
    }
}
