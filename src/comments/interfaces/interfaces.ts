import { Document } from 'mongoose';

export interface CommentInterface extends Document {
    readonly postID: String,
    readonly content: String;
    readonly author: String;
    readonly createdTime: Date;
    readonly lastUpdatedTime: Date;
}