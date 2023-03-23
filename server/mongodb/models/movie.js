import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  name: String,
  comment_date: String,
  comment: String,
});

const movie_discussion = new mongoose.Schema({
  title: String,
  submitted_date: String,
  body: String,
  comments: {
    type: commentsSchema,
  },
});

export default mongoose.model("movie_discussion", movie_discussion);
