import {useSocketContext} from "../context/socket.context";

export const useSocketHook = () => {
    const socket = useSocketContext();

    const connect = () => {
        socket.on('connect', () => {
            console.log('Socket connection established.');
        });
    }

    return { connect, socket };
}