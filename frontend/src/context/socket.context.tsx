import socketIO from 'socket.io-client';
import {createContext, useContext, useReducer} from "react";

const token = JSON.parse(localStorage.getItem('user') || 'false').token;

const initialState = {
    state: null,
    dispatch: () => {}
}

export const socket = socketIO('http://localhost:4001', {
    withCredentials: true, query: {token}
});

const SocketContext = createContext<any>(initialState);
export const useSocketContext = () => useContext(SocketContext);

export const socketReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CONNECT':
            return { socket: action.payload }
        case 'DISCONNECT':
            return { socket: null }
        default:
            return state
    }
}

export const SocketContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(socketReducer, {
        socket: null
    });

    return (
        <SocketContext.Provider value={{...state, dispatch}}>
            {children}
        </SocketContext.Provider>
    )
}