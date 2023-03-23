import express from "express";
import {
  getMovieDiscussions,
  getTvDiscussions,
} from "../controllers/forums.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/tv/discussion", getTvDiscussions);
router.get("/movie/discussion", getMovieDiscussions);

export default router;
