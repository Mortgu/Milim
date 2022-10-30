import {model, Schema} from "mongoose";
import {I_Draft} from "./draft.interface";

const DraftSchema: Schema = new Schema<I_Draft>({
    fileName: {
        type: String,
        default: `unnamed`,
    },
    meta: {
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        lastUpdatedAt: {
            type: Date,
            default: Date.now(),
        },
        editStatus: {
            type: String,
            default: "draft"
        },
        publicStatus: {
            type: String,
            default: "private"
        },
    }
});

export const DraftModel = model<I_Draft>("Draft", DraftSchema);