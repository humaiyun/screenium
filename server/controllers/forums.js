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

export const getTvDiscussionById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await tv_discussion.findById(id);

    return res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: "could not retrieve post details",
      error: error.message,
    });
  }
};

export const getMovieDiscussionById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await movie_discussion.findById(id);

    return res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: "could not retrieve post details",
      error: error.message,
    });
  }
};
