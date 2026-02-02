import React, { useState } from 'react';
import { useLogin } from '../api/useLogin'
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    Paper
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {
    const login = useLogin()


    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        login.mutate({ username: 'admin', password: '123456' })
    };



    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
        >

            <Container maxWidth="xs">

                <Paper
                    elevation={6}
                    sx={{
                        padding: 4,
                        borderRadius: 3,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            用户登录
                        </Typography>

                        <Box sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="用户名"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={form.username}
                                onChange={handleChange}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="密码"
                                type="password"
                                autoComplete="current-password"
                                value={form.password}
                                onChange={handleChange}
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="记住我"
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                登录
                            </Button>

                            <Grid container>
                                <Grid>
                                    <Link href="#" variant="body2">
                                        忘记密码？
                                    </Link>
                                </Grid>
                                <Grid>
                                    <Link href="#" variant="body2">
                                        {"还没有账号？去注册"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>

    )
}