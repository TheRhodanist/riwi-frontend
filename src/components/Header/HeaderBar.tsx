import {AppBar, Button, Divider, Toolbar} from "@mui/material";
import {Person, PersonRemoveAlt1Outlined} from "@mui/icons-material";
import React, {useContext} from "react";
import {LoginContext} from "../../context/LoginContex";
import useUserService from "../../hooks/useUserService";

interface Props {

}

export function HeaderBar(props: Props) {
    const {createUser: creater} = useUserService();
    const {user, login, logout} = useContext(LoginContext);

    async function handleClick() {
        console.log('Click happened');
        creater("test@test.de", "1234").then(response => {

            alert(`New user created with id: ${response}`);
        });
        console.log(user)
    }


    return (
        <AppBar position={"sticky"} color={"info"}>
            <Toolbar>
                <Button variant={"contained"} onClick={handleClick}>Test</Button>
                <Divider orientation={"vertical"} variant={"middle"} flexItem/>
                <div className={"styles.loginWrapper"}>
                    {user ?
                        <Button variant={"contained"} color={"secondary"} endIcon={<PersonRemoveAlt1Outlined/>}
                                onClick={logout}>Logout</Button>
                        :
                        <Button variant={"contained"} color={"secondary"} endIcon={<Person/>}
                                onClick={() => login("", "")}>Login</Button>}
                </div>

            </Toolbar>

        </AppBar>
    )
}