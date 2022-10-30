import React, {useState} from 'react';

import "./resources/App.scss";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Index from "./pages/index/Index";
import Navigation from "./components/widgets/Navigation/Navigation";
import Sidebar from "./components/widgets/Sidebar/Sidebar";
import navigation from "./components/widgets/Navigation/Navigation";
import Drafts from "./pages/drafts/Drafts";
import DeletedDrafts from "./pages/drafts/DeletedDrafts";
import Organisation from "./pages/organisation/Organisation";
import OrganisationDrafts from "./pages/organisation/subpages/Drafts";
import OrganisationMembers from "./pages/organisation/subpages/Members";
import {GlobalModal} from "./components/widgets/Models/GlobalModal";
import File from "./pages/file/File";

function App() {
    const [showNavigation, setShowNavigation] = useState(true);

    const routes = [
        {
            path: "/login",
            main: () => <Login/>,
            sidebar: () => <></>,
            navigation: () => <></>,
        },
        {
            path: "/",
            main: () => <div className="app"><Index /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />,
        },
        {
            path: "/drafts",
            main: () => <div className="app"><Drafts /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/published",
            main: () => <div className="app"><Drafts /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/drafts/deleted",
            main: () => <div className="app"><DeletedDrafts /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/organisation",
            main: () => <div className="app"><Organisation /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/organisation/drafts",
            main: () => <div className="app"><OrganisationDrafts /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/organisation/drafts/settings",
            main: () => <div className="app"><OrganisationDrafts /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/organisation/members",
            main: () => <div className="app"><OrganisationMembers /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/organisation/members/settings",
            main: () => <div className="app"><OrganisationMembers /></div>,
            sidebar: () => <Sidebar />,
            navigation: () => <Navigation />
        },
        {
            path: "/file/:id",
            main: () => <File />,
            sidebar: () => <></>,
            navigation: () => <Navigation />
        },
        {
            path: "*",
            main: () => <></>,
            sidebar: () => <></>,
            navigation: () => <></>
        },
    ];

    return (
        <GlobalModal>
            <Routes>
                {routes.map(({ path, navigation }) => (
                    <Route key={path} path={path} element={navigation()} />
                ))}
            </Routes>
            <Routes>
                {routes.map(({ path, sidebar }) => (
                    <Route key={path} path={path} element={sidebar()} />
                ))}
            </Routes>
            <Routes>
                {routes.map(({ path, main }) => (
                    <Route key={path} path={path} element={main()} />
                ))}
            </Routes>
        </GlobalModal>
    );
}

export default App;
