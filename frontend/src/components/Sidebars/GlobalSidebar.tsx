import "./GlobalSidebar.scss";

import {createContext, useContext, useState} from "react";

import {Close} from "@material-ui/icons";

// SIDEBAR COMPONENTS
import NotificationSidebar from "./components/NotificationSidebar";

export const SIDEBAR_TYPES = {
    NOTIFICATION_SIDEBAR: "NOTIFICATION_SIDEBAR"
}

const SIDEBAR_COMPONENTS: any = {
    [SIDEBAR_TYPES.NOTIFICATION_SIDEBAR]: NotificationSidebar,
}

type T_GlobalSidebarContext = {
    showSidebar: (sidebarType: string, modalProps?: any) => void,
    hideSidebar: () => void,
    store: any
}

const initialState: T_GlobalSidebarContext = {
    showSidebar: () => {},
    hideSidebar: () => {},
    store: {},
}

const GlobalSidebarContext = createContext(initialState);
export const useGlobalSidebarContext = () => useContext(GlobalSidebarContext);

const GlobalSidebar = ({ children }: any) => {
    const [store, setStore] = useState({});
    const { sidebarType, sidebarProps }: any = store || { };

    const [isClosing, setIsClosing] = useState(false);

    const showSidebar = (sidebarType: string, sidebarProps: any = {}) => {
        setStore({ ...store, sidebarType, sidebarProps });
    }

    const hideSidebar = () => {
        setIsClosing(true);
        setTimeout(() => {
            setStore({...store, sidebarType: null, sidebarProps: {}});

            setIsClosing(false);
        }, 300);
    }

    const renderComponent = () => {
        const SidebarComponent = SIDEBAR_COMPONENTS[sidebarType];

        if (!sidebarType || !SidebarComponent)
            return null;

        return (
            <div className={`sidebar-wrapper${isClosing ? ' fadeOut': ''}`}>
                <div onClick={hideSidebar} className="sidebar-background"></div>
                <div className="sidebar">
                    <div className="sidebar-head">
                        <div className="sidebar-close" onClick={hideSidebar}>
                            <button className="sidebar-close-button"></button>
                            <figure className="button-icon"></figure>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <SidebarComponent {...sidebarProps} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <GlobalSidebarContext.Provider value={{ store, showSidebar, hideSidebar }}>
            {renderComponent()}
            {children}
        </GlobalSidebarContext.Provider>
    );
}

export default GlobalSidebar;