import React, {useEffect} from 'react';

import "./resources/App.scss";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Navigation from "./components/Navigation/Navigation";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import Drafts from "./pages/drafts/Drafts";
import DeletedDrafts from "./pages/drafts/DeletedDrafts";
import Organisation from "./pages/organisation/Organisation";
import OrganisationDrafts from "./pages/organisation/subpages/Drafts";
import OrganisationMembers from "./pages/organisation/subpages/Members";
import {GlobalModal} from "./components/Models/GlobalModal";
import FileEdit from "./pages/file/FileEdit";
import {useAuthContext} from "./context/auth.context";
import Resents from "./pages/resents/Resents";
import File from "./pages/file/File";
import Published from "./pages/published/Published";
import Marketplace from "./pages/marketplace/Marketplace";
import NavigationUnauthorized from "./components/Navigation/Navigation.unauthorized";
import GlobalSidebar from "./components/Sidebars/GlobalSidebar";
import {useSocketHook} from "./hooks/socket.hook";
import Collections from "./pages/collections/Collections";

function App() {
    const {user} = useAuthContext();
    const { connect } = useSocketHook();

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
            main: () => <Marketplace/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: false
        },
        {
            path: "/resents",
            main: () => <Resents/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/drafts",
            main: () => <Drafts/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/published",
            main: () => <Published/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/drafts/deleted",
            main: () => <DeletedDrafts/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/organisation",
            main: () => <Organisation/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/organisation/drafts",
            main: () => <OrganisationDrafts/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/organisation/drafts/settings",
            main: () => <OrganisationDrafts/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/organisation/members",
            main: () => <OrganisationMembers/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/organisation/members/settings",
            main: () => <OrganisationMembers/>,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/file/:id",
            main: () => <File/>,
            sidebar: () => <></>,
            navigation: () => <Navigation/>,
            authenticated: false
        },
        {
            path: "/file/:id/edit",
            main: () => <FileEdit/>,
            sidebar: () => <></>,
            navigation: () => <Navigation/>,
            authenticated: true
        },
        {
            path: "/collections",
            main: () => <Collections />,
            sidebar: () => <SideNavigation/>,
            navigation: () => <Navigation/>,
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

    useEffect(() => {connect()}, []);

    return (
        <GlobalModal>
            <GlobalSidebar>
                <Routes>
                    {routes.map(({path, navigation, authenticated}) => (
                        <Route key={path} path={path}
                               element={authenticated ? user && navigation() : user ? navigation() :
                                   <NavigationUnauthorized/>}/>
                    ))}
                </Routes>
                <Routes>
                    {routes.map(({path, sidebar, authenticated}) => (
                        <Route key={path} path={path}
                               element={authenticated ? user && sidebar() : user ? sidebar() : <></>}/>
                    ))}
                </Routes>
                <Routes>
                    {routes.map(({path, main, authenticated}) => (
                        <Route key={path} path={path}
                               element={authenticated ? user ? <div className="app">{main()}</div> : <Login/> : user ?
                                   <div className="app">{main()}</div> :
                                   <div className="app fullscreen">{main()}</div>}/>
                    ))}
                </Routes>
            </GlobalSidebar>
        </GlobalModal>
    );
}

export default App;
