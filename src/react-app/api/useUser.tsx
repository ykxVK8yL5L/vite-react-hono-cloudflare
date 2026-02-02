import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../lib/fetcher'
import { User } from '../types/respons'

export function useCurrentUser() {
    return useQuery<User>({
        queryKey: ['current-user'],
        queryFn: () => fetcher('/api/user'),
    })
}