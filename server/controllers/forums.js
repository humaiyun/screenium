import tv_discussion from "../mongodb/models/tv.js";
import movie_discussion from "../mongodb/models/movie.js";

export const getTvDiscussions = async (req, res) => {
  const posts = await tv_discussion.find({}).sort({ _id: -1 });

  return res.status(200).json({ posts });
};

export const getMovieDiscussions = async (req, res) => {
  const posts = await movie_discussion.find({}).sort({ _id: -1 });

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

export const postNewMovieDiscussion = async (req, res) => {
  const { title, body, author } = req.body;

  const newPost = new movie_discussion({
    title,
    body,
    author,
    submitted_date: new Date().toString().slice(0, 15),
    comments: [],
  });

  try {
    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({
      message: "could post new submission",
      error: error.message,
    });
  }
};

export const postNewTVDiscussion = async (req, res) => {
  const { title, body, author } = req.body;

  const newPost = new tv_discussion({
    title,
    body,
    author,
    submitted_date: new Date().toString().slice(0, 15),
    comments: [],
  });

  try {
    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({
      message: "could post new submission",
      error: error.message,
    });
  }
};

export const postNewMovieComment = async (req, res) => {
  const { id } = req.params;
  const { name, comment } = req.body;
  const comment_date = new Date().toString().slice(0, 15);

  try {
    const newComment = { name, comment, comment_date };
    const existingPost = await movie_discussion.findById(id);

    const updatePost = await movie_discussion.findByIdAndUpdate(
      id,
      {
        id,
        comments: [...existingPost?.comments, newComment],
      },
      { new: true }
    );
    return res.json(updatePost);
  } catch (error) {
    res.status(404).json({
      message: "could not retrieve post details",
      error: error.message,
    });
  }
};

export const postNewTVComment = async (req, res) => {
  const { id } = req.params;
  const { name, comment } = req.body;
  const comment_date = new Date().toString().slice(0, 15);

  try {
    const newComment = { name, comment, comment_date };
    const existingPost = await tv_discussion.findById(id);

    const updatePost = await tv_discussion.findByIdAndUpdate(
      id,
      {
        id,
        comments: [...existingPost?.comments, newComment],
      },
      { new: true }
    );
    return res.json(updatePost);
  } catch (error) {
    res.status(404).json({
      message: "could not retrieve post details",
      error: error.message,
    });
  }
};
