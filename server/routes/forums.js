import express from "express";
import {
  getMovieDiscussionById,
  getMovieDiscussions,
  getTvDiscussionById,
  getTvDiscussions,
} from "../controllers/forums.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/tv/discussion", getTvDiscussions);
router.get("/tv/discussion/:id", getTvDiscussionById);
router.get("/movie/discussion", getMovieDiscussions);
router.get("/movie/discussion/:id", getMovieDiscussionById);

export default router;
