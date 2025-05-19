import { Router } from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const router = Router();

router.post('/register')
router.post('/login')
router.post('/logout')

export default router;