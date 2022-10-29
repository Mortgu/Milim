import { Router } from "express";
import {add_draft} from "./drafts.controller";

const router: Router = Router();

// ADD DRAFT "(POST) http://localhost/drafts/"
router.post('/', add_draft);

export default router;