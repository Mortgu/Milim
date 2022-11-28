import {Router} from "express";
import {add_draft, delete_draft, get_draft, get_drafts, modify_draft} from "./drafts.controller";

const router: Router = Router();

// ADD DRAFT "(POST) http://localhost/drafts/"
router.post('/', add_draft);

// GET DRAFTS "(GET) http://localhost/drafts/"
router.get('/', get_drafts);

// GET DRAFT "(GET) http://localhost/drafts/:id"
router.get('/:id', get_draft);

// PATCH DRAFT "(PATCH) http://localhost/drafts/:id"
router.patch('/:id', modify_draft);

// PATCH DRAFT "(DELETE) http://localhost/drafts/:id"
router.delete('/:id', delete_draft);


export default router;