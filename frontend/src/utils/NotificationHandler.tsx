import {Link} from "react-router-dom";
import {useGlobalSidebarContext} from "../components/Sidebars/GlobalSidebar";

const reactStringReplace = require('react-string-replace');

export default class NotificationHandler {
    private readonly url: string;
    private readonly method: string;

    private filterString: string = "";
    private filterValue: string = "";

    private user: any;

    constructor(url: string = "http://localhost:4000/notifications/get", method: string = "POST") {
        this.url = url;
        this.method = method;
    }

    closeSidebar = () => {
        const {hideSidebar} = useGlobalSidebarContext();

        hideSidebar();
    }

    authorize = (user: any) => {
        this.user = user;
        return this;
    }

    format = (data: any) => {
        data.forEach((notification: any) => {
            // RETURN IF THERE ARE NO KEYS.
            if (!notification.keys) {
                notification.notification.body = (<p className="card-text">{notification.notification.body}</p>);
                return;
            }

            let notificationBody = notification.notification.body.toString();
            const notificationKeyEntries = notification.keys;

            for (let entry of Object.entries(notificationKeyEntries)) {
                const key = entry[0];
                const value: any = entry[1];

                if (notificationBody.includes(key)) {
                    notification.notification.body = (
                        <p className="card-text">{reactStringReplace(notificationBody, key, (match: any, i: any) => (
                            <Link onClick={this.closeSidebar} key={i} to={value.link}>{value.display}</Link>)
                        )}</p>
                    )
                }

            }
        });

        return data;
    }

    filter = (key: string, value: any) => {
        this.filterValue = value.toString();
        this.filterString = key;

        return this;
    }

    build = async (callback: Function) => {
        const url = this.url + `?${this.filterString}=${this.filterValue}`;

        const response = await fetch(url, {
            method: this.method,
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.user.token}`
            },
            body: JSON.stringify({
                id: this.user.id
            })
        });

        const json = await response.json();

        return callback(this.format(json));
    }
}
