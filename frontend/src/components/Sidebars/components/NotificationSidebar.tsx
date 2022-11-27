import React, {useEffect, useState} from "react";

import "./NotificationSidebar.scss";

import moment from "moment/moment";

import NotificationHandler from "../../../utils/NotificationHandler";
import PageNavigation from "../../PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../../context/auth.context";

const NotificationSidebar = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>();

    const { user } = useAuthContext();

    useEffect(() => {
        new NotificationHandler()
            .authorize(user)
            .build((data: any) => {
                setLoading(false);
                setData(data);
            });
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
            <PageNavigation style={{padding: "0"}}>
                <NavLink end to="/organisation/members" className="page-navigation-item">Members</NavLink>
                <NavLink end to="/organisation/members" className="page-navigation-item">test</NavLink>
            </PageNavigation>
            {data?.map((row: any, index: any) => {
                return (
                    <div key={index} className="timeline-card">
                        <div className="content">
                            <h4 className="card-title">{row.notification.title} <span className="timestamp">{moment(row.meta.date).format('DD.MM.YYYY - HH:MM')}</span></h4>
                            {row.notification.body}
                            {/**  <Link to="/">Draft Name</Link> **/}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NotificationSidebar;