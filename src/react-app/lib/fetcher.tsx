import { useAuthStore } from '../stores/auth'
import { ApiError } from '../types/errors'

export interface FetchOptions extends RequestInit {
    auth?: boolean
}

export async function fetcher<T>(
    url: string,
    options: FetchOptions = {}
): Promise<T> {
    const { auth = true, headers, ...rest } = options
    const token = useAuthStore.getState().token



    const finalHeaders = new Headers(headers)

    finalHeaders.set('Content-Type', 'application/json')

    if (auth && token) {
        finalHeaders.set('Authorization', `Bearer ${token}`)
    }

    const res = await fetch(url, {
        ...rest,
        headers: finalHeaders,
    })

    if (res.status === 401) {
        useAuthStore.getState().clear()
        const error: ApiError = new Error('Unauthorized')
        error.status = 401
        throw error
    }

    if (!res.ok) {
        const error: ApiError = new Error('Request Error')
        error.status = res.status
        throw error
    }

    return res.json()
}
