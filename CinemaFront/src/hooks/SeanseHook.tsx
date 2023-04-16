import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';
import ISeanse from '../types/Seanse';
import http from '../http-common';
import CustomError from "../types/errorTypes/CustomError";

export function useSeanses() {
    const defaultError: CustomError = { Message: "", StatusCode: 200 };
    const [seanses, setSeanses] = useState<ISeanse[]>([]);
    const [show, setShow] = useState(false);
    const [occuredError, setOccuredError] = useState<CustomError>(defaultError);

    async function fetchSeanses() {
        const response = await http.get<ISeanse[]>("/seanses");
        setSeanses(response.data);
    }

    async function deleteSeanse(seanseId: number) {
        try {
            await http.delete(`/seanses/${seanseId}`);
            setSeanses(seanses.filter(x => x.id !== seanseId));
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

    async function updateSeanse(seanseId: number) {
        try {
            await http.put(`/seanses/${seanseId}`);
            setSeanses(seanses.filter(x => x.id !== seanseId));
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
        fetchSeanses();
    }, []);

    return { seanses, show, deleteSeanse, updateSeanse, setShow, occuredError }
}