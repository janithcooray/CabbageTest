import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: String,
  numberOfPosts: Number,
  createdDate: Date,
});