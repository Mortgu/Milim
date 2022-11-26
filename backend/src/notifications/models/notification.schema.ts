import {model, Schema} from "mongoose";

import {I_Notification} from "./notification.interface";

const NotificationSchema: Schema = new Schema<I_Notification>({
    meta: {
        date: {
            type: Date,
            default: Date.now()
        },
    },
    notification: {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    },
    keys: {}
});

export const NotificationModel = model<I_Notification>("Notification", NotificationSchema);