import io from 'socket.io-client';
import {useEffect, useState} from "react";

const user = JSON.parse(localStorage.getItem('user') || "false");

const socket = io('http://localhost:4001', {
    withCredentials: true,
    query: {
        token: user.token
    }
});

export const useSocketHook = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        if (socket !== null) {
            socket.on('connect', () => {
                console.log('Socket connection established.');
                setIsConnected(true);
            });

            socket.on('disconnect', () => {
                setIsConnected(false);
            });

            socket.on("connect_error", () => {
                // revert to classic upgrade
                socket.io.opts.transports = ["polling", "websocket"];
            });
        }
    }, [socket]);
}

