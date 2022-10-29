import { useState } from "react";
import {useAuthContext} from "../context/AuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useAuthContext();

    const login = async (username: String, password: String) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({username, password})
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.message);
            setIsLoading(false);
        } else {
            localStorage.setItem("user", JSON.stringify(json.data));

            dispatch({
                type: "LOGIN",
                payload: json.data,
            });

            setIsLoading(false);
        }
    }

    return { login, isLoading, error };
}