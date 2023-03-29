import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  name: String,
  comment_date: String,
  comment: String,
});

const tv_discussion = new mongoose.Schema({
  title: String,
  author: String,
  submitted_date: String,
  body: String,
  comments: {
    type: [commentsSchema],
  },
});

export default mongoose.model("tv_discussion", tv_discussion);
