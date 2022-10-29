import {NextFunction, Request, Response} from "express";
import RoleModel from "../users/roles/models/role.schema";

export const hasPermission = (permission: String): any => {
    return async (request: any, response: Response, next: NextFunction) => {
        const rolesIds = request.user.roles;

        await RoleModel.find({_id: { $in: rolesIds }, permissions: permission}).clone().exec((error, result) => {
            if (error) response.status(500).json({message: 'Something went wrong, while trying to check your permissions!'});

            if (result.length >= 1) {
                next();
            } else {
                response.status(400).json({message: 'You are not authorized to access this page.'});
            }
        });
    }
}

export const authorizePermission = (permission: String) => {
    return async (request: any, response: Response, next: NextFunction) => {
        const rolesIds = request.user.roles;

        await RoleModel.find({_id: { $in: rolesIds }, permissions: permission}).clone().exec((error, result) => {
            if (error) response.status(500).json({message: 'Something went wrong, while trying to check your permissions!'});

            if (result.length >= 1) {
                response.status(201).json({message: 'Successfully authorized permissions.'});
            } else {
                response.status(400).json({message: 'You are not authorized to access this page.'});
            }
        });
    }
}