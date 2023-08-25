import express from "express"
import { login, registeration } from "../controllers/authController.js";
const router = express.Router();

router.route('/login').post(login);
router.route('/register').post(registeration)

export default router;