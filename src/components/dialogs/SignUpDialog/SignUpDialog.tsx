import React, {Dispatch, FormEvent, SetStateAction} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField} from "@mui/material";
import styles from "../dialogWrapper.module.css";
import useUserService from "../../../hooks/useUserService";

interface Props {
    open: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>
    setParentOpen: Dispatch<SetStateAction<boolean>>
}

export function SignUpDialog(props: Props) {
    const {open, setDialogOpen} = props;
    const userService = useUserService()

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        userService.createUser(formJson.email, formJson.password).then(response => {
            handleClose()
        });

    }

    function handleClose() {
        setDialogOpen(false);
    }

    function handleAllClose() {
        props.setParentOpen(false);
        handleClose();
    }

    return (
        <Dialog open={open}
                onClose={handleAllClose}
                PaperProps={{
                    component: "form",
                    onSubmit: (event: FormEvent<HTMLFormElement>) => handleFormSubmit(event)
                }}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent className={styles.dialogContentWrapper}>
                <TextField variant={"standard"}
                           label={"E-Mail"}
                           name={"email"}
                           required>
                </TextField>
                <Divider variant={"middle"}></Divider>
                <TextField variant={"standard"}
                           label={"Password"}
                           type="password"
                           name={"password"}
                           autoComplete="current-password"
                           required>
                </TextField>
                <Divider variant={"middle"}></Divider>
            </DialogContent>
            <DialogActions>
                <Button variant={"outlined"} type={"submit"}>
                    Register
                </Button>
            </DialogActions>
        </Dialog>
    );
}
