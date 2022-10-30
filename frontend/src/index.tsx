import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App2';

import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContextProvider>
);

