import mongoose, {model, Schema} from "mongoose";
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
        public: {
            type: Boolean,
            default: false
        },
        creator: mongoose.Types.ObjectId
    },
    content: {
        type: Schema.Types.Mixed,
        default: {
            "root": {
                "children": [
                    {
                        "children": [],
                        "direction": null,
                        "format": "",
                        "indent": 0,
                        "type": "paragraph",
                        "version": 1
                    }
                ],
                "direction": null,
                "format": "",
                "indent": 0,
                "type": "root",
                "version": 1
            }
        }
    }

}, {minimize: false});

export const DraftModel = model<I_Draft>("Draft", DraftSchema);