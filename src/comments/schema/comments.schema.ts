import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: Number,
  createdDate: Date,
  lastUpdated: Date
});