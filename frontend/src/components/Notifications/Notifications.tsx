import React, {useEffect, useState} from "react";

import './Notifications.scss';

import NotificationCard from "./NotificationCard/NotificationCard";
import {useAuthContext} from "../../context/auth.context";
import {useSocketHook} from "../../hooks/socket.hook";
import NotificationHandler from "../../utils/NotificationHandler";

const Notifications = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const {user} = useAuthContext();
    const {socket} = useSocketHook();

    const fetchNotifications = () => {
        setLoading(true);

        new NotificationHandler(user).fetchAll((data: any) => {
            setLoading(false);
            setData([...data]);
        });
    }

    const fetchNotificationById = (id: string) => {
        setLoading(true);

        new NotificationHandler(user).findById(id, (data: any) => {
            setData((current: any) => [...current, data[0]]);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchNotifications();

        socket.on('notification:new', (args: any) => fetchNotificationById(args.notification._id));
        socket.on('notification:deleted', () => fetchNotifications());
    }, []);

    if (loading) {
        return (
            <div className="notifications">
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="notifications">
            {data?.map((row: any, index: any) => {
                return <NotificationCard key={index} classList="hidden" title={row.notification.title} date={row.meta.date} body={row.notification.body} />
            })}
        </div>
    )
}

export default Notifications;