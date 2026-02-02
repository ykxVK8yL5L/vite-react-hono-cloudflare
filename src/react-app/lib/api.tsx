import { useAuthStore } from '../stores/auth'

type ApiOptions = RequestInit & {
    auth?: boolean
}


export async function apiFetch(
    path: string,
    options: ApiOptions = {}
) {
    const token = useAuthStore.getState().token

    const headers = new Headers(options.headers)

    headers.set('Content-Type', 'application/json')

    if (options.auth !== false && token) {
        headers.set('Authorization', `Bearer ${token}`)
    }

    const res = await fetch(path, {
        ...options,
        headers,
    })
    if (res.status === 401) {
        useAuthStore.getState().clear()
        throw new Error('Unauthorized')
    }

    return res.json()
}
