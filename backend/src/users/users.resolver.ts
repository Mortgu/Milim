import { Router } from "express";
import {get_users} from "./users.controller";

const router: Router = Router();

// AUTHENTICATE USER "(GET) http://localhost/users/"
router.get('/', get_users);

// AUTHENTICATE USER "(POST) http://localhost/authorize/"
router.post('/authorize', () => {});

// AUTHENTICATE USER "(POST) http://localhost/signin/"
router.post('/login', (req, res) => {res.status(404).json({message: "not found"})});

// REGISTER NEW USER "(POST) http://localhost/signup/"
router.post('/signup', () => {});

export default router;