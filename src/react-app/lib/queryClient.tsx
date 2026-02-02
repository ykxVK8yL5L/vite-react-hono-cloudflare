import { QueryClient } from '@tanstack/react-query'
import { ApiError } from '../types/errors'


export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error: ApiError) => {
                // 401 不重试
                if (error?.status === 401) return false
                return failureCount < 2
            },
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: false,
        },
    },
})
