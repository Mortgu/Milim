import {Document} from "mongoose";

export interface I_Notification extends Document {
    meta: {
        date: string,
    },
    notification: {
        title: string,
        body: string
    },
    keys: {}
}
