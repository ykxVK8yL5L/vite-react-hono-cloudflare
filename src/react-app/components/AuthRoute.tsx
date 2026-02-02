import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function AuthRoute({ children }: Props) {
    const navigate = useNavigate()
    const token = useAuthStore((state) => state.token);
    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                // 如果没有 token，跳转到登录页
                navigate('/login')
            }
        }
        checkAuth()
    }, [navigate, token])
    return <>{children}</> // 如果有 token，继续渲染子组件
}
