import { Request, Response } from "express";

import * as service from "./authenticate.service";

export const login = async (request: Request, response: Response) => {
    try {
        const user = await service.login(request.body);
        response.status(user.status).send(user);
    } catch (exception) {
        return response.status(500).send(exception);
    }
}

export const signup = async (request: Request, response: Response) => {
    try {
        const result = await service.signup(request.body);
        response.status(result?.status || 201).json(result);
    } catch (exception) {
        return response.status(500).json({message: "Something went wrong."})
    }
}