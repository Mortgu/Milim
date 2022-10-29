import {createContext, useContext, useEffect, useReducer} from "react";

const initialState = {
    state: null,
    dispatch: () => {
    }
}

const AuthContext = createContext<any>(initialState);
export const useAuthContext = () => useContext(AuthContext);

export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    const isJSON = (str: any): Boolean => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (!isJSON(localStorage.getItem('user'))) {
            return;
        }

        const user = JSON.parse(localStorage.getItem('user') || "false");

        if (user && user.token) {
            const authenticateUser = async () => {
                const response = await fetch("http://localhost:4000/verify", {
                    method: "POST",
                    headers: {'Authorization': `Bearer ${user.token}`}
                });

                console.log(response)

                if (response.ok) {
                    return await response.json();
                } else {
                    throw new Error("Error");
                }
            }

            authenticateUser().then(data => {
                console.log('data', data);
                dispatch({type: 'LOGIN', payload: user});
            }).catch(error => {
                console.error(error);
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}