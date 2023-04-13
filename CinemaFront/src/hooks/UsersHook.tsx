import { User } from '../types/User';
import { CustomError } from '../types/CustomError';
import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';

export function useUsers() {
    
    const defaultError: CustomError = { Message: "", StatusCode: 200 };
    const [users, setUsers] = useState<User[]>([]);
    const [show, setShow] = useState(false);
    const [occuredError, setOccuredError] = useState<CustomError>(defaultError);

    async function fetchUsers() {
        const response = await axios.get<User[]>("https://localhost:7282/api/users/GetAllUsers");
        setUsers(response.data);
    }

    async function deleteUser(userId: number) {
        try {
            await axios.delete(`https://localhost:7282/api/users/${userId}`);
            setUsers(users.filter(x => x.id !== userId));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<CustomError>;
                if (serverError && serverError.response) {
                    setOccuredError(serverError.response.data as CustomError);
                    setShow(true);
                }
            }
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, show, deleteUser, setShow, occuredError }
}