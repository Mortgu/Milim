import React, {useEffect, useState} from "react";

import "./NotificationSidebar.scss";

import moment from "moment/moment";

import NotificationHandler from "../../../utils/NotificationHandler";
import {useAuthContext} from "../../../context/auth.context";
import TabNavigation from "../../Navigation/TabNavigation/TabNavigation";
import {useSocketHook} from "../../../hooks/socket.hook";
import Tab from "../../Navigation/TabNavigation/Tab";

const NotificationSidebar = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>([]);

    const {user} = useAuthContext();
    const {socket} = useSocketHook();

    const fetchNotifications = () => {
        new NotificationHandler(user).fetchAll((data: any) => {
            setLoading(false);
            setData([...data]);
        });
    }

    const fetchNotificationById = (id: string) => {
        new NotificationHandler(user).findById(id, (data: any) => {
            setData((current: any) => [...current, data[0]]);
        });
    }

    useEffect(() => {
        fetchNotifications();

        socket.on('notification:new', (args: any) => fetchNotificationById(args.notification._id));
        socket.on('notification:deleted', () => fetchNotifications());

    }, []);

    if (loading) {
        return (
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        )
    }

    return (
        <div className="notification-sidebar">
            <div className="head">
                <h3 className="head-title">Notifications</h3>
                <p className="head-text">Alle Benachrichtungen an einem Ort.</p>
            </div>
            <TabNavigation>
                <Tab display="All">

                </Tab>
                <Tab display="Unread">

                </Tab>
                <Tab display="Done">

                </Tab>
            </TabNavigation>
            <div className="notifications">
                {data?.map((row: any, index: any) => {
                    return (
                        <div key={index} className="notification-card">
                            <div className="content">
                                <h4 className="card-title">{row.notification.title} <span
                                    className="timestamp">{moment(row.meta.date).format('DD.MM.YYYY - HH:MM')}</span>
                                </h4>
                                {row.notification.body}
                                {/**  <Link to="/">Draft Name</Link> **/}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotificationSidebar;