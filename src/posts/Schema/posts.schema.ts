import * as mongoose from 'mongoose';

export const PostsSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdTime: Date,
  lastUpdatedTime: Date
});