import React, {useEffect, useState} from 'react';

import "./resources/App.scss";

import {Navigate, Route, Routes} from "react-router-dom";

import Navigation from "./components/widgets/Navigation/Navigation";
import Drafts from "./pages/drafts/Drafts";
import {useAuthContext} from "./context/AuthContext";
import Login from "./pages/login/Login";
import Sidebar from "./components/widgets/Sidebar/Sidebar";
import Organisation from "./pages/organisation/Organisation";
import OrganisationMembers from "./pages/organisation/subpages/Members";
import OrganisationDrafts from "./pages/organisation/subpages/Drafts";
import {GlobalModal} from './components/widgets/Models/GlobalModal';
import Index from "./pages/index/Index";
import DeletedDrafts from "./pages/drafts/DeletedDrafts";

function App() {
    const [showNavigation, setShowNavigation] = useState(true);

    const {user} = useAuthContext();

    return (
        <GlobalModal>
            {showNavigation && (
                <>
                    <Navigation/>
                    <Sidebar/>
                </>
            )}
            <div className="app">
                <Routes>
                    <Route path="/" element={user ? <Index setShowNavigation={setShowNavigation}/> :
                        <Login setShowNavigation={setShowNavigation}/>}></Route>

                    <Route path="/drafts" element={user ? <Drafts setShowNavigation={setShowNavigation}/> :
                        <Login setShowNavigation={setShowNavigation}/>}></Route>
                    <Route path="/drafts/deleted"
                           element={user ? <DeletedDrafts setShowNavigation={setShowNavigation}/> :
                               <Login setShowNavigation={setShowNavigation}/>}></Route>

                    <Route path="/organisation" element={user ? <Organisation setShowNavigation={setShowNavigation}/> :
                        <Login setShowNavigation={setShowNavigation}/>}></Route>
                    <Route path="/organisation/members"
                           element={user ? <OrganisationMembers setShowNavigation={setShowNavigation}/> :
                               <Login setShowNavigation={setShowNavigation}/>}>
                        <Route path="settings"
                               element={user ? <OrganisationMembers setShowNavigation={setShowNavigation}/> :
                                   <Login setShowNavigation={setShowNavigation}/>}></Route>
                    </Route>

                    <Route path="/organisation/drafts"
                           element={user ? <OrganisationDrafts setShowNavigation={setShowNavigation}/> :
                               <Login setShowNavigation={setShowNavigation}/>}>
                        <Route path="settings"
                               element={user ? <OrganisationDrafts setShowNavigation={setShowNavigation}/> :
                                   <Login setShowNavigation={setShowNavigation}/>}></Route>
                    </Route>

                    <Route path="*" element={!user ? <Login setShowNavigation={setShowNavigation}/> :
                        <Navigate to="/"/>}></Route>
                </Routes>
            </div>
        </GlobalModal>
    );
}

export default App;
