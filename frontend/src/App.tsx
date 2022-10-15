import React from 'react';

import "./resources/App.scss";

import {Route, Routes} from "react-router-dom";

import IndexPage from "./pages/index/IndexPage";

import Navigation from "./components/widgets/Navigation/Navigation";

function App() {
    return (
        <React.Fragment>
            <Navigation/>

            <div className="app">
                <Routes>
                    <Route path="/" element={<IndexPage/>}></Route>
                </Routes>
            </div>
        </React.Fragment>
    );
}

export default App;
