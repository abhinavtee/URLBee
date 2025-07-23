import express from 'express'
import { createShortUrl, createShortUrlAfterAuth, deleteShortUrl } from "../controller/short-url-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/", createShortUrl);
router.post("/afterAuth", createShortUrlAfterAuth);
router.delete("/:id", authMiddleware, deleteShortUrl);

export default router;
