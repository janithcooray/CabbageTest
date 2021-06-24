import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  postID: String,
  content: String,
  author: String,
  createdTime: Date,
  lastUpdatedTime: Date
});