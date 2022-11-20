import React from 'react';

import "./resources/App.scss";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Drafts from "./pages/drafts/Drafts";
import DeletedDrafts from "./pages/drafts/DeletedDrafts";
import Organisation from "./pages/organisation/Organisation";
import OrganisationDrafts from "./pages/organisation/subpages/Drafts";
import OrganisationMembers from "./pages/organisation/subpages/Members";
import {GlobalModal} from "./components/Models/GlobalModal";
import FileEdit from "./pages/file/FileEdit";
import {useAuthContext} from "./context/AuthContext";
import HomePage from "./pages/index/HomePage";
import File from "./pages/file/File";
import Published from "./pages/published/Published";
import Marketplace from "./pages/marketplace/Marketplace";
import NavigationUnauthorized from "./components/Navigation/Navigation.unauthorized";

function App() {
    const {user} = useAuthContext();

    const routes = [
        {
            path: "/login",
            main: () => <Login/>,
            sidebar: () => <></>,
            navigation: () => <></>,
            authenticated: true
        },
        {
            path: "/",
            main: () => <Marketplace />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: false
        },
        {
            path: "/resents",
            main: () => <HomePage />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/drafts",
            main: () => <Drafts />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/published",
            main: () => <Published />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/drafts/deleted",
            main: () => <DeletedDrafts />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/organisation",
            main: () => <Organisation />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/organisation/drafts",
            main: () => <OrganisationDrafts />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/organisation/drafts/settings",
            main: () => <OrganisationDrafts />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/organisation/members",
            main: () => <OrganisationMembers />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/organisation/members/settings",
            main: () => <OrganisationMembers />,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "/file/:id",
            main: () => <File />,
            sidebar: () => <></>,
            navigation: () => <Navigation />,
            authenticated: false
        },
        {
            path: "/file/:id/edit",
            main: () => <FileEdit />,
            sidebar: () => <></>,
            navigation: () => <Navigation />,
            authenticated: true
        },
        {
            path: "*",
            main: () => <></>,
            sidebar: () => <></>,
            navigation: () => <></>,
            authenticated: true
        },
    ];

    return (
        <GlobalModal>
            <Routes>
                {routes.map(({ path, navigation, authenticated }) => (
                    <Route key={path} path={path} element={authenticated ? user && navigation() : user ? navigation() : <NavigationUnauthorized />} />
                ))}
            </Routes>
            <Routes>
                {routes.map(({ path, sidebar , authenticated}) => (
                    <Route key={path} path={path} element={authenticated ? user && sidebar() : user ? sidebar() : <></>} />
                ))}
            </Routes>
            <Routes>
                {routes.map(({ path, main, authenticated }) => (
                    <Route key={path} path={path} element={authenticated ? user ? <div className="app">{main()}</div> : <Login /> : user ? <div className="app">{main()}</div> : <div className="app fullscreen">{main()}</div>} />
                ))}
            </Routes>
        </GlobalModal>
    );
}

export default App;
