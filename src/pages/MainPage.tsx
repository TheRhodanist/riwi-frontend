import React from "react";
import {HeaderBar} from "../components/Header/HeaderBar";
import useDeviceMediaType from "../hooks/useDeviceMediaType";
import useGetHello from "../hooks/useGetHello";
import UserList from "../components/UserList/UserList";

interface Props {
    darkMode: boolean | null;
    setDarkMode: (darkMode: boolean) => void;
}

export function MainPage(props: Props) {
    const text = useGetHello();


    function renderMobile() {
        return (
            <div>{text}</div>
        )
    }

    const {isMobile} = useDeviceMediaType();


    return (
        <>
            <HeaderBar darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
            <div className="App">
                Hello
            </div>
            {isMobile ? renderMobile() : null}
            <UserList/>
        </>
    )
}