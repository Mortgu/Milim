import {Request, Response} from "express";

import {NotificationModel} from "./models/notification.schema";
import {socketIo} from "../app";

export async function add_notification(request: Request, response: Response): Promise<void> {
    try {
        const notification = await new NotificationModel(request.body).save();

        socketIo.emit('notification:new', {notification});

        response.status(201).json({message: 'Notification added', notification: notification});
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}

export async function get_notifications(request: Request, response: Response): Promise<void> {
    try {
        const notifications = await NotificationModel.find({user: request.body.id}, {}, (error: any, documents: any) => {
            if (error) return response.send(new Error(error));

            return documents;
        }).clone();

        response.status(201).send(notifications);
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}

export async function get_notification(request: Request, response: Response): Promise<void> {
    try {
        const notification = await NotificationModel.find({_id: request.params.id}, {}, (error: any, documents: any) => {
            if (error) return response.send(new Error(error));

            return documents;
        }).clone();

        response.status(201).send(notification);
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}

export async function delete_notification(request: Request, response: Response): Promise<void> {
    try {
        const notificationId = request.params.id;

        const notification = await NotificationModel.findByIdAndDelete(notificationId, request.body, function (error: any, result: any) {
            if (error) return response.send(new Error(error));
        });

        socketIo.emit('notification:deleted', {notificationId});

        response.status(201).json(notification);
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}