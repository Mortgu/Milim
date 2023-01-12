import "./NotificationCard.scss";

import moment from "moment";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

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
            <div className="notification-card-head">
                <div className="notification-card-icon"></div>
                <div className="block">
                    <h4 className="card-title">{title}</h4>
                    <span className="timestamp">{moment(date).format('DD.MM.YYYY - HH:MM')}</span>
                </div>
                <CloseIcon className="close-notification" />
            </div>
            <div className="notification-card-body">
                {body}
            </div>
        </div>
    );
}

export default NotificationCard;