import {useEffect, useState} from "react";

import "./NotificationSidebar.scss";

import moment from "moment/moment";

import NotificationHandler from "../../../utils/NotificationHandler";

const NotificationSidebar = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>();

    useEffect(() => {
        new NotificationHandler().build((data: any) => {
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
        <>
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
        </>
    )
}

export default NotificationSidebar;