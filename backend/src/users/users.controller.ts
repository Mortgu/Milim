import {Request, Response} from "express";

import {UserModel} from "./models/user.schema";

export async function get_users(request: Request, response: Response): Promise<void> {
    try {
        const query = await UserModel.find(request.query, '', (error: any, results: any) => {
            if (error) throw error;

            return results;
        }).clone();

        response.status(201).send(query);
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}