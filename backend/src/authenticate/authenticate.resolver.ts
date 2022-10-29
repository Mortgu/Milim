import { Router } from "express";
import {login, signup, verify} from "./authenticate.controller";

const router: Router = Router();

// AUTHENTICATE USER "(POST) http://localhost/login/"
router.post('/verify', verify);

// AUTHENTICATE USER "(POST) http://localhost/login/"
router.post('/login', login);

// REGISTER NEW USER "(POST) http://localhost/signup/"
router.post('/signup', signup);

export default router;