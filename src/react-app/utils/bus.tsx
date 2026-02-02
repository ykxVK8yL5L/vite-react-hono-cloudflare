import mitt from 'mitt'
import { useEffect } from 'react'
/**
 * 全局事件类型声明
 */
export type AppEvents = {
    'auth:logout': void
    'auth:login': { userId: string }
    'order:refresh': void
    'notify': NotifyPayload
    'notification:show': { message: string; type?: 'success' | 'error' }
}

export type NotifyPayload = {
    id?: string
    type?: 'success' | 'error' | 'info' | 'warning'
    title?: string
    message: string
    duration?: number
}

export const eventBus = mitt<AppEvents>()


export function useEvent<K extends keyof AppEvents>(
    type: K,
    handler: (event: AppEvents[K]) => void
) {
    useEffect(() => {
        eventBus.on(type, handler)
        return () => {
            eventBus.off(type, handler)
        }
    }, [type, handler])
}
