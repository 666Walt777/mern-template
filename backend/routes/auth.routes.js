import express from 'express';
import { newt,gett } from "../controllers/auth.controller.js";
const router = express.Router();

// Sample login route
router.post('/', newt)

router.get('/', gett )

export default router; 