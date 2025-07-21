import express from "express";
import { registerUser, loginUser, get_CurrentUser, logoutUser } from "../controller/auth-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, get_CurrentUser);
router.get('/logout', logoutUser);

export default router;  