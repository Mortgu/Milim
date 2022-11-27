import {Request, Response} from "express";

import {NotificationModel} from "./models/notification.schema";
import {UserModel} from "../users/models/user.schema";

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
        UserModel.findById(request.body.id)
            .populate('notifications').exec((error: any, notifications: any) => {
                response.status(201).send(notifications.notifications);
            });
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}