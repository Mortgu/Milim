import { NextFunction, Response } from "express";

import jsonwebtoken, { Secret } from 'jsonwebtoken';
import { UserModel } from "../users/models/user.schema";

export const SECRET_KEY: Secret = '7f61d4ea448e54d727259ee70e549b92f81f6fcce62bae83c493d812f62fe9e98c435a728e4cd99a9149179ba28d39ab867a27514c5a0c2774d6fa09f29f56d9';

export const requireAuth = async (req: any, res: Response, next: NextFunction) => {
    const { authorization }: any = req.headers;

    if (!authorization)
        return res.status(401).json({error: 'Authorization token required!'});

    const token = authorization.split(' ')[1];

    try {
        const { _id }: any = jsonwebtoken.verify(token, SECRET_KEY);

        req.user = await UserModel.findOne({ _id }).select('_id roles');
        
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({message: {head: 'Request is not authorized!', body: "Please make sure that you are logged in to your account."}});
    }
} 