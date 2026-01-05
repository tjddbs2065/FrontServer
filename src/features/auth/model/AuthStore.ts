import {create} from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: !!localStorage.getItem("accessToken"),
    login: (token: string) => {
        localStorage.setItem("accessToken", token);
        set({isLoggedIn: true})
    },
    logout: () => {
        localStorage.removeItem("accessToken");
        set({isLoggedIn: false});
    },
}));

interface AuthState {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}