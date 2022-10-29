import {DocumentDefinition} from "mongoose";

import {I_User} from "../users/models/user.interface";
import {UserModel} from "../users/models/user.schema";

import bcrypt from "bcryptjs";
import {sign} from "./authenticate.module";

async function signup(user: DocumentDefinition<I_User>): Promise<any> {
    try {
        return await UserModel.create(user);
    } catch (exception) {
        return {message: {head: "Failed to create user.", body: "Username is already in use."}, status: 400};
    }
}

interface ReturnData {
    status: number,
    message: string,
    data?: Object,
}

async function login(user: DocumentDefinition<I_User>): Promise<ReturnData> {
    let { username, password } = user;

    username = username?.toLowerCase();

    let foundUser = null;

    try {
        foundUser = await UserModel.findOne({
            $or: [{username: username}, {email: username}]
        });
    } catch (exception) {
        return {status: 500, message: "Error while authorization progress!"};
    }

    if (!foundUser) {
        return {status: 404, message: 'User not found!'};
    }

    if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
        const token = sign(foundUser);

        return {
            status: 201,
            data: {
                id: foundUser._id,
                username: foundUser.username,
                email: foundUser.email,
                settings: foundUser.settings,
                token
            },
            message: "User was successfully authenticated"
        };

    } else {
        return {status: 400, message: "Password is not correct!"};
    }
}

export { signup, login };

