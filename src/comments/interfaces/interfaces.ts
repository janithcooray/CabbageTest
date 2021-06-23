import { Document } from 'mongoose';

export interface CommentInterface extends Document {
    readonly title: String;
    readonly content: String;
    readonly author: Number;
    readonly createdDate: Date;
    readonly lastUpdated: Date;
}