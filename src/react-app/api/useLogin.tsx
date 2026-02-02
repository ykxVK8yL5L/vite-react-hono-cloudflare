import { useMutation } from '@tanstack/react-query'
import { fetcher } from '../lib/fetcher'
import { useAuthStore } from '../stores/auth'
import { useUserStore } from '../stores/user'
import { LoginResponse } from '../types/respons'

interface LoginPayload {
    username: string
    password: string
}

export function useLogin() {
    return useMutation({
        mutationFn: (data: LoginPayload) =>
            fetcher<LoginResponse>('/api/login', {
                method: 'POST',
                auth: false,
                body: JSON.stringify(data),
            }),
        onSuccess: (res: LoginResponse) => {
            useAuthStore.getState().setToken(res.token)
            useUserStore.getState().setUser(res.user)
            window.location.hash = '#/'
        },
    })
}
