import {createContext} from "react";
import {User} from "../types/User";

interface LoginContext {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const LoginContext = createContext<LoginContext>({
    user: null,
    login: (email: string, password: string) => {
    },
    logout: () => {
    }
})
