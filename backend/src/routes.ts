import { Router } from "express";

import authenticateResolver from "./authenticate/authenticate.resolver";
import draftsResolver from "./drafts/drafts.resolver";

const router: Router = Router();

router.use("/", authenticateResolver)

router.use("/drafts", draftsResolver);

export default router;