import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dashboard, MoreHoriz, People, ShoppingCart } from '@mui/icons-material';


const menus = [
    { label: '仪表盘', path: '/dashboard', icon: <Dashboard /> },
    { label: '用户管理', path: '/users', icon: <People /> },
    { label: '订单管理', path: '/orders', icon: <ShoppingCart /> },
    { label: '其它', path: '/other', icon: <MoreHoriz /> },
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
                    {item.icon && (
                        <ListItemIcon sx={{ minWidth: 32 }}>
                            {item.icon}
                        </ListItemIcon>
                    )}
                    <ListItemText primary={item.label} />
                </ListItemButton>
            ))}
        </List>
    )
}
