import {createContext, useContext, useEffect, useReducer} from "react";

const initialState = {
    state: null,
    dispatch: () => {}
}

const AuthContext = createContext<any>(initialState);
export const useAuthContext = () => useContext(AuthContext);

export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || "false");

        if (user) {
            dispatch({type: 'LOGIN', payload: user});
        }
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}