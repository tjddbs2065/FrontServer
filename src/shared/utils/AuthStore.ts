import {create} from "zustand";

interface AuthState {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: !!localStorage.getItem("accessToken"),
    login: () => set({isLoggedIn: true}),
    logout: () => {
        localStorage.removeItem("accessToken");
        set({isLoggedIn: false});
    },
}));