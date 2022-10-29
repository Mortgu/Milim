import { Document } from "mongoose";

export interface I_Roles extends Document {
    name: string,
    permissions: string[],
    meta?: Object
}

