import jsonwebtoken from "jsonwebtoken";

import { SECRET_KEY } from '../middlewares/requireAuth';
import { I_User } from "../users/models/user.interface";

export function verify(user: I_User) {
    try {
        // @ts-ignore
        return jsonwebtoken.sign({  _id: user._id?.toString(), username: user.username }, SECRET_KEY, {
            expiresIn: '2 days',
        });
    } catch (exception) {
        return exception;
    }
}