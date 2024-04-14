import {Box, List, ListItem} from "@mui/material";
import {useEffect, useState} from "react";
import {User} from "../../types/User";
import useUserService from "../../hooks/useUserService";

interface Props {
}

export default function UserList(props: Props) {
    const [users, setUsers] = useState<User[] | null>(null)
    const {getUsers} = useUserService();

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response)
        })
    }, []);

    return (
        <Box>
            <List>
                {users?.map(user => <ListItem key={user.id}>User: {user.email}/{user.password}</ListItem>)}
            </List>
        </Box>
    );
}
