import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


interface AuthState {
    token: string | null;
    isLoggedIn: boolean;
    setToken: (token: string | null) => void;
    clear: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            isLoggedIn: false,

            setToken: (token) =>
                set({
                    token,
                    isLoggedIn: Boolean(token),
                }),

            clear: () =>
                set({
                    token: null,
                    isLoggedIn: false,
                }),
        }),
        {
            name: "auth-store",
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                console.log("登陆状态:", state?.isLoggedIn);
            },
            partialize: (state) => ({
                token: state.token,
                isLoggedIn: state.isLoggedIn,
            }),
        },
    ),
);
