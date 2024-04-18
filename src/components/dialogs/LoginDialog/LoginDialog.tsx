import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField, Typography} from "@mui/material";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import styles from "../dialogWrapper.module.css"
import {SignUpDialog} from "../SignUpDialog/SignUpDialog";

interface Props {
    open: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>
}

export function LoginDialog(props: Props) {
    const {open, setDialogOpen} = props;
    const [signUpOpen, setSignUpOpen] = useState(false);

    function handleClose() {
        setDialogOpen(false);
    }

    function handleOpenSignup() {
        setSignUpOpen(true);
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <><Dialog open={open}
                  onClose={handleClose}
                  PaperProps={{
                      component: "form",
                      onSubmit: (event: FormEvent<HTMLFormElement>) => handleFormSubmit(event)
                  }}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent className={styles.dialogContentWrapper}>
                <TextField variant={"standard"}
                           label={"E-Mail"}
                           autoComplete={"email"}
                           required>
                </TextField>
                <Divider variant={"middle"}></Divider>
                <TextField variant={"standard"}
                           label={"Password"}
                           type="password"
                           autoComplete="current-password"
                           required>
                </TextField>
                <Divider variant={"middle"}></Divider>
                <Typography>
                    Not a member? <Button onClick={handleOpenSignup}>Sign up</Button>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant={"outlined"} type={"submit"}>
                    Login
                </Button>
            </DialogActions>
        </Dialog><SignUpDialog open={signUpOpen} setDialogOpen={setSignUpOpen} setParentOpen={setDialogOpen}/>
        </>)
}
