// effects/auth.effect.ts
import { useAuthStore } from '../stores/auth'

export function initAuthEffect(): () => void {
    let prevToken = useAuthStore.getState().token

    const unsubscribe = useAuthStore.subscribe((state) => {
        if (prevToken && !state.token) {
            // 从登录 → 登出
            window.location.hash = '#/login'
        }
        prevToken = state.token
    })

    // 🔑 一定要 return cleanup
    return () => {
        unsubscribe()
    }
}