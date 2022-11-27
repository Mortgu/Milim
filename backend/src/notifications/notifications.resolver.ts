import {Router} from "express";

import {add_notification, get_notifications} from "./notifications.controller";
import {requireAuth} from "../middlewares/requireAuth";

const router: Router = Router();

// GET NOTIFICATION "(POST) http://localhost/notifications/get"
router.post('/get', requireAuth, get_notifications);

// ADD NOTIFICATION "(POST) http://localhost/notifications/"
router.post('/', requireAuth, add_notification);

export default router;