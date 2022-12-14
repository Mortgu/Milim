import { Document } from "mongoose";

export interface I_User extends Document {
    username: string,
    email: string,
    password: string,

    roles: any,

    meta?: Object,
    settings?: Object,
}