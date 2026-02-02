import { useLogin } from '../api/useLogin'

export default function Login() {
    const login = useLogin()
    return (
        <button
            onClick={() => {
                login.mutate({ username: 'admin', password: '123456' })
            }}
        >
            登录
        </button >
    )
}