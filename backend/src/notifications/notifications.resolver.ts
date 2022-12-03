import {Router} from "express";

import {add_notification, delete_notification, get_notification, get_notifications} from "./notifications.controller";
import {requireAuth} from "../middlewares/requireAuth";

const router: Router = Router();

// GET NOTIFICATION "(POST) http://localhost/notifications/get"
router.post('/get', requireAuth, get_notifications);

// GET NOTIFICATION "(POST) http://localhost/notifications/get/:id"
router.post('/get/:id', requireAuth, get_notification);

// ADD NOTIFICATION "(POST) http://localhost/notifications/"
router.post('/', requireAuth, add_notification);

// ADD NOTIFICATION "(DELETE) http://localhost/notifications/"
router.delete('/:id', requireAuth, delete_notification);

export default router;