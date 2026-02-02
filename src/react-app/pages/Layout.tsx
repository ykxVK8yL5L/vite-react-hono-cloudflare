import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NotificationContainer } from "../components/Notification";
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Drawer,
    Toolbar, Tooltip,
    Typography,
    useTheme, useMediaQuery
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';

const drawerWidth = 240
export default function Layout() {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const pages = ['Products', 'Pricing', 'Blog'];
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [open, setOpen] = useState(false)

    const [setting, setSetting] = useState(false)
    const handleCloseSettingMenu = () => {
        setSetting(false);
    };

    const handleOpenSettingMenu = () => {
        setSetting(true);
    };


    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            {/* 顶部栏 */}
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    {isMobile && (
                        <IconButton color="inherit" onClick={() => setOpen(!open)}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" noWrap sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        管理后台
                    </Typography>

                    {/* 移动端标题 */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        管理后台
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenSettingMenu} sx={{ p: 0, color: 'white' }}>
                                设置
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(setting)}
                            onClose={handleCloseSettingMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* 侧边栏 */}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? open : true}
                onClose={() => setOpen(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <Sidebar />
            </Drawer>

            {/* 主内容区域 */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 1,
                    minHeight: '100vh',
                }}
            >
                <Toolbar />
                <NotificationContainer />
                <Outlet />
            </Box>
        </Box>
    )

}