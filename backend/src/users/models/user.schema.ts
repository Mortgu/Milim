import mongoose, { Schema, model } from "mongoose";

import bcrypt from "bcryptjs";

import {I_User} from "./user.interface";
import RoleModel from "../roles/models/role.schema";

const UserSchema: Schema = new Schema<I_User>({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    roles: {
        type: [{type: mongoose.Types.ObjectId, ref: "Roles"}],
        default: []
    },

    settings: {
        avatar: {
            type: String,
            default: ""
        }
    },

    meta: {
        joinedAt: {
            type: Date,
            default: Date.now()
        },
        lastProfileUpdate: {
            type: Date,
            default: Date.now()
        },
    }
});

UserSchema.pre("save", async function (next: any) {
    const user = this;

    // HASH PASSWORD BEFORE SAVE
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    user.username = user.username.toLowerCase();
    user.email = user.email.toLowerCase();

    await RoleModel.findOne({name: "USER" }, '_id', (error, result) => {
        if (error) throw error;

        user.roles.push(result);
    }).clone();

    next();
});

export const UserModel = model<I_User>("User", UserSchema);