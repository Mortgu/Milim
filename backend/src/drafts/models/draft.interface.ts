import mongoose from "mongoose";

export type DraftEditStatus = "draft" | "finished";
export type DraftPublicStatus = "private" | "public";

export interface I_Draft {
    _id: any,
    fileName?: String,
    meta?: {
        createdAt?: Date,
        lastUpdatedAt?: Date,
        editStatus: DraftEditStatus,
        public?: boolean,
        creator: mongoose.Types.ObjectId
    },
    tags?: [],
    content?: Object,
}