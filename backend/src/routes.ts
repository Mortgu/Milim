import { Router } from "express";

import authenticateResolver from "./authenticate/authenticate.resolver";
import draftsResolver from "./drafts/drafts.resolver";
import usersResolver from "./users/users.resolver";
import notificationsResolver from "./notifications/notifications.resolver";

const router: Router = Router();

router.use("/", authenticateResolver)

router.use("/drafts", draftsResolver);

router.use("/users", usersResolver);

router.use("/notifications", notificationsResolver);

export default router;