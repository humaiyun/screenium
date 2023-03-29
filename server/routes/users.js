import express from "express";
import { signin, signup, getUsers } from "../controllers/users.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/", getUsers);

export default router;
