import React from "react";

import "./NotificationSidebar.scss";
import Notifications from "../../Notifications/Notifications";
import CloseIcon from "@material-ui/icons/Close";
import {useGlobalSidebarContext} from "../GlobalSidebar";

const NotificationSidebar = () => {
    const { hideSidebar } = useGlobalSidebarContext();

    return (
        <div className="notification-sidebar">
            <div className="head">
                <button className="sidebar-close" onClick={hideSidebar}>
                    <CloseIcon />
                </button>
                <div className="sidebar-head-content">
                    <h3 className="head-title">Notifications</h3>
                    <p className="head-text">Alle Benachrichtungen an einem Ort.</p>
                </div>
            </div>
            <div className="body">
                <Notifications />
            </div>
        </div>
    );
}

export default NotificationSidebar;