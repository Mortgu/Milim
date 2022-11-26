import {Router} from "express";

import {add_notification, get_notifications} from "./notifications.controller";

const router: Router = Router();

// GET NOTIFICATION "(GET) http://localhost/notifications/"
router.get('/', get_notifications);

// ADD NOTIFICATION "(POST) http://localhost/notifications/"
router.post('/', add_notification);

export default router;