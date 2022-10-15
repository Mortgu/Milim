import { Router } from "express";
import {login, signup} from "./authenticate.controller";

const router: Router = Router();

// AUTHENTICATE USER "(POST) http://localhost/login/"
router.post('/login', login);

// REGISTER NEW USER "(POST) http://localhost/signup/"
router.post('/signup', signup);

export default router;