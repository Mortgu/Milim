export type DraftEditStatus = "draft" | "finished";
export type DraftPublicStatus = "private" | "public";

export interface I_Draft {
    fileName?: String,
    meta?: {
        createdAt?: Date,
        lastUpdatedAt?: Date,
        editStatus: DraftEditStatus,
        publicStatus: DraftPublicStatus,
    },
    content: []
}