import "./NotificationCard.scss";

import moment from "moment";
import React from "react";

export type NotificationCardAttributes = {
    notification: {
        title: string,
        body: any,
    },
    meta: {
        date: string,
    }
}

const NotificationCard = ({title, date, body, classList, ...rest}: any) => {
    return (
        <div className={"notification-card " + classList} {...rest}>
            <div className="content">
                <h4 className="card-title">{title} <span
                    className="timestamp">{moment(date).format('DD.MM.YYYY - HH:MM')}</span>
                </h4>
                {body}
            </div>
        </div>
    );
}

export default NotificationCard;