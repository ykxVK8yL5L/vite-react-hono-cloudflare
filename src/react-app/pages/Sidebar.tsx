import {
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const menus = [
    { label: '仪表盘', path: '/dashboard' },
    { label: '用户管理', path: '/users' },
    { label: '订单管理', path: '/orders' },
]

export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <List>
            {menus.map((item) => (
                <ListItemButton
                    key={item.path}
                    selected={location.pathname.startsWith(item.path)}
                    onClick={() => navigate(item.path)}
                >
                    <ListItemText primary={item.label} />
                </ListItemButton>
            ))}
        </List>
    )
}
