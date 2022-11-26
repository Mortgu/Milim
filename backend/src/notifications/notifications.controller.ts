import {Request, Response} from "express";

import {NotificationModel} from "./models/notification.schema";

export async function add_notification(request: Request, response: Response): Promise<void> {
    try {
        const notification = await new NotificationModel(request.body).save();

        response.status(201).json({message: 'Notification added', notification: notification});
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}

export async function get_notifications(request: Request, response: Response): Promise<void> {
    try {
        const notifications = await NotificationModel.find(request.query, '', (error: any, results: any) => {
            if (error) throw error;

            return results;
        }).clone();

        response.status(201).send(notifications);
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}