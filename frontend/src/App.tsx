import React, {useState} from 'react';

import "./resources/App.scss";

import {Navigate, Route, Routes} from "react-router-dom";

import IndexPage from "./pages/index/IndexPage";

import Navigation from "./components/widgets/Navigation/Navigation";
import SubjectPage from "./pages/subjects/SubjectPage";
import SubjectSubpage from "./pages/subjects/subpages/SubjectSubpage";
import {useAuthContext} from "./context/AuthContext";
import LoginPage from "./pages/login/LoginPage";
import EntrySubpage from "./pages/subjects/subpages/EntrySubpage";

function App() {
    const [showNavigation, setShowNavigation] = useState(true);

    const { user } = useAuthContext();

    return (
        <React.Fragment>
            {showNavigation && (
                <Navigation />
            )}
            <div className="app">
                <Routes>
                    <Route path="/" element={user ? <IndexPage setShowNavigation={setShowNavigation} /> : <LoginPage setShowNavigation={setShowNavigation} />}></Route>
                    <Route path="/subjects" element={user ? <SubjectPage setShowNavigation={setShowNavigation} /> : <LoginPage setShowNavigation={setShowNavigation} />}></Route>
                    <Route path="/subjects/:subject" element={user ? <SubjectSubpage setShowNavigation={setShowNavigation} /> : <LoginPage setShowNavigation={setShowNavigation} />}>
                        <Route path=":entry" element={user ? <EntrySubpage setShowNavigation={setShowNavigation} /> : <LoginPage setShowNavigation={setShowNavigation} />}></Route>
                    </Route>

                    <Route path="*" element={!user ? <LoginPage setShowNavigation={setShowNavigation} /> : <Navigate to="/" />}></Route>
                </Routes>
            </div>
        </React.Fragment>
    );
}

export default App;
