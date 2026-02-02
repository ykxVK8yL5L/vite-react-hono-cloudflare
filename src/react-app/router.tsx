// router.tsx
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from "./App.tsx";
import { NotFound } from './pages/404'
import { initAuthEffect } from './effects/auth.tsx'
import Layout from './pages/Layout'
import Login from './pages/Login'
import AuthRoute from './components/AuthRoute';

export function AppRouter() {

    const cleanups: Array<() => void> = []
    cleanups.push(initAuthEffect())


    return (
        <HashRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/login' element={<Login />} />

                <Route element={<AuthRoute><Layout /></AuthRoute>}>
                    <Route path="/" element={<App />} />
                    <Route path="/app" element={<div>Home Page</div>} />
                </Route>

            </Routes>
        </HashRouter>
    )
}