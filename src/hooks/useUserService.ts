import {User} from "../types/User";

export default function useUserService() {

    async function createUser(email: string, password: string): Promise<string | void> {
        console.log("Creating user with email", email);
        return fetch('http://localhost:8080/users', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors'

        })
            .then(response => {
                if (response.ok) return response.text()
                else throw new Error('User could not be created')
            })

    }

    async function getUsers(): Promise<User[]> {
        return fetch('http://localhost:8080/users', {
            method: 'GET',
            body: null,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
            .then(response => {
                if (response.ok) return response.json() as Promise<User[]>
                else throw new Error('Could not fetch users')
            })
    }

    return {
        createUser,
        getUsers
    }
}