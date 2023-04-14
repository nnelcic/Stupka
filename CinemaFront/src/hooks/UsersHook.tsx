import { User } from '../types/userTypes/User';
import { CustomError } from '../types/errorTypes/CustomError';
import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';
import { UserInfo } from '../types/userTypes/UserInfo';

export function useUsers() {
    
    const defaultError: CustomError = { Message: "", StatusCode: 200 };
    const defaultUser: UserInfo = { 
        id: 0, 
        lastName: "", 
        roleName: '', 
        firstName: '', 
        phoneNumber: '', 
        email: '', 
        birthday: '',
        userDetails: {
            id: 0,
            reviews: [],
            favourites: []
        }
    }

    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<UserInfo>(defaultUser);
    const [show, setShow] = useState(false);
    const [occuredError, setOccuredError] = useState<CustomError>(defaultError);

    async function fetchUsers() {
        const response = await axios.get<User[]>("https://localhost:7282/api/users/GetAllUsers");
        setUsers(response.data);
    }

    async function getUser(userId: number) {
        try {
            const response = await axios.get<UserInfo>(`https://localhost:7282/api/users/GetUserInfo/${userId}`);
            setUser(response.data);
        } catch (error) {
            throw new Error(`Failed to get user with ID ${userId}: `);
        }
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

    return { users, show, deleteUser, setShow, occuredError, getUser, user }
}