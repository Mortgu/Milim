import { Router } from "express";

import authenticateResolver from "./authenticate/authenticate.resolver";

const router: Router = Router();

router.use("/", authenticateResolver);

export default router;