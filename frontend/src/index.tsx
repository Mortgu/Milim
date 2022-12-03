import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/auth.context";
import {SocketContext, socket} from "./context/socket.context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <AuthContextProvider>
        <SocketContext.Provider value={socket}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SocketContext.Provider>
    </AuthContextProvider>
);

