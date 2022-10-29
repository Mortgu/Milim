import {Router} from "express";
import {add_draft, get_drafts} from "./drafts.controller";

const router: Router = Router();

// ADD DRAFT "(POST) http://localhost/drafts/"
router.post('/', add_draft);

// GET DRAFTS "(GET) http://localhost/drafts/"
router.get('/', get_drafts);

export default router;