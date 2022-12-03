import socketIO from 'socket.io-client';
import {createContext, useContext, useReducer} from "react";

const token = JSON.parse(localStorage.getItem('user') || 'false').token;

export const socket = socketIO('http://localhost:4001', {
    withCredentials: true, query: {token}
});

export const SocketContext = createContext(socket);
export const useSocketContext = () => useContext(SocketContext);