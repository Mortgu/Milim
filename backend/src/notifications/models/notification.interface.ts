import mongoose, {Document} from "mongoose";

export interface I_Notification extends Document {
    user: mongoose.Types.ObjectId
    meta: {
        date: string,
    },
    notification: {
        title: string,
        body: string
    },
    keys: {}
}
