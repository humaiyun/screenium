import express from "express";
import {
  getMovieDiscussionById,
  getMovieDiscussions,
  getTvDiscussionById,
  getTvDiscussions,
  postNewMovieDiscussion,
  postNewTVDiscussion,
} from "../controllers/forums.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/tv/discussion", getTvDiscussions);
router.get("/tv/discussion/:id", getTvDiscussionById);
router.post("/tv/discussion", postNewTVDiscussion);

router.get("/movie/discussion", getMovieDiscussions);
router.get("/movie/discussion/:id", getMovieDiscussionById);
router.post("/movie/discussion", postNewMovieDiscussion);

export default router;
