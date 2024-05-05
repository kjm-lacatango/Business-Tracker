import {Router} from 'express';
import { logOut, login, register } from '../controllers/auth.js';
const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logOut);

export default router;