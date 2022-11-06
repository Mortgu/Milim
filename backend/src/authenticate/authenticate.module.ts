import jsonwebtoken from "jsonwebtoken";

import {SECRET_KEY} from '../middlewares/requireAuth';
import {I_User} from "../users/models/user.interface";

export async function verify(token: any) {
    try {
        return jsonwebtoken.verify(token, SECRET_KEY, function (error: any, decoded: any) {
            if (error) {
                return {
                    status: 500,
                    message: "",
                    exception: error
                }
            }
            return {
                status: 201,
                jwt: decoded,
            };
        });
    } catch (exception) {
        return {
            status: 500,
            message: "",
            exception: exception
        }
    }
}

export function sign(user: I_User) {
    try {
        // @ts-ignore
        return jsonwebtoken.sign({  _id: user._id?.toString(), username: user.username }, SECRET_KEY, {
            expiresIn: '2 days',
        });
    } catch (exception) {
        return exception;
    }
}