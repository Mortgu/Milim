import React from "react";

import "./NotificationSidebar.scss";
import Notifications from "../../Notifications/Notifications";

const NotificationSidebar = () => {
    return (
        <div className="notification-sidebar">
            <div className="head">
                <h3 className="head-title">Notifications</h3>
                <p className="head-text">Alle Benachrichtungen an einem Ort.</p>
            </div>
            <Notifications />
        </div>
    );
}

export default NotificationSidebar;