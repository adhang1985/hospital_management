import express from "express";
import { getAllMessages, sendMessage } from "../controllers/messageController.js";
import { isAdminAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post('/send',sendMessage);
router.get('/getAll',isAdminAuth,getAllMessages);

export default router;