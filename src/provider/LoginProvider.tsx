import React, {useContext, useState} from "react";
import {LoginContext} from "../context/LoginContex";
import {User} from "../types/User";

interface Props {
    children: React.ReactNode;
}

export function LoginProvider(props: Props) {
    const [user, setUser] = useState<User | null>(null);
    const loginContext = useContext(LoginContext);

    function handleLogin(email: string, password: string) {
        console.log('Login clicked');
        console.log(email);
        setUser({
            id: crypto.randomUUID(),
            email: email,
            password: "pw",
            name: "John",
            surname: "Doe",
            birthDate: "1990-01-01"
        })
    }

    function handleLogout() {
        console.log('Logout clicked');
        setUser(null)
    }

    return (
        <LoginContext.Provider value={{user, login: handleLogin, logout: handleLogout}}>
            {props.children}
        </LoginContext.Provider>
    );
}