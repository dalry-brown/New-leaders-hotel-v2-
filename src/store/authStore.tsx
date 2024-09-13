import { create } from "zustand";

interface useAuthInterface{
    loggedIn: boolean,
    login: () => void,
    logout: () => void
}

export const useAuth = create<useAuthInterface>(
    (set) => ({
        loggedIn: false,
        login: () => set({ loggedIn: true }),
        logout: () => set({ loggedIn: false })
    })
)