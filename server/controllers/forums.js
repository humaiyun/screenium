import tv_discussion from "../mongodb/models/tv.js";
import movie_discussion from "../mongodb/models/movie.js";

export const getTvDiscussions = async (req, res) => {
  const posts = await tv_discussion.find({});

  return res.status(200).json({ posts });
};

export const getMovieDiscussions = async (req, res) => {
  const posts = await movie_discussion.find({});

  return res.status(200).json({ posts });
};
