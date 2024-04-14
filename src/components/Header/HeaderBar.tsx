import {AppBar, Button, Divider, IconButton, Toolbar, Tooltip, useMediaQuery} from "@mui/material";
import {DarkMode, LightMode, Person, PersonRemoveAlt1Outlined} from "@mui/icons-material";
import React, {useContext, useState} from "react";
import {LoginContext} from "../../context/LoginContex";
import useUserService from "../../hooks/useUserService";
import styles from "./HeaderBar.module.css";
import {LoginDialog} from "../dialogs/LoginDialog/LoginDialog";

interface Props {
    darkMode: boolean | null;
    setDarkMode: (darkMode: boolean) => void;
}

export function HeaderBar(props: Props) {
    const {darkMode, setDarkMode} = props;
    const {createUser: creater} = useUserService();
    const {user, login, logout} = useContext(LoginContext);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const modeToSelect = darkMode ?? prefersDarkMode
    const [loginOpen, setLoginOpen] = useState(false);

    async function handleClick() {
        console.log('Click happened');
        creater("test@test.de", "1234").then(response => {

            alert(`New user created with id: ${response}`);
        });
        console.log(user)
    }


    function handleModeClick() {
        setDarkMode(darkMode == null ? !prefersDarkMode : !darkMode)
    }

    return (
        <><AppBar position={"sticky"} color={"info"}>
            <Toolbar className={styles.header}>
                <div className={styles.appButtonWrapper}>
                    <Button variant={"contained"} onClick={handleClick}>Test</Button>
                </div>
                <Divider orientation={"vertical"} variant={"middle"} flexItem/>
                <div className={styles.loginWrapper}>
                    {modeToSelect ?
                        <Tooltip title={"Light Mode"}><IconButton onClick={handleModeClick}>
                            <DarkMode/>
                        </IconButton></Tooltip>
                        :
                        <Tooltip title={"Dark Mode"}><IconButton onClick={handleModeClick}>
                            <LightMode/>
                        </IconButton></Tooltip>}
                </div>
                <div>
                    {user ?
                        <Button id={styles.loginButton} variant={"contained"} color={"secondary"}
                                endIcon={<PersonRemoveAlt1Outlined/>}
                                onClick={logout}>Logout</Button>
                        :
                        <Button id={styles.loginButton} variant={"contained"} color={"secondary"} endIcon={<Person/>}
                                onClick={() => setLoginOpen(true)}>Login</Button>}
                </div>

            </Toolbar>
        </AppBar><LoginDialog open={loginOpen} setDialogOpen={setLoginOpen}/></>
    )
}