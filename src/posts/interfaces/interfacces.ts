import { Document } from 'mongoose';

export interface PostInterface extends Document {
    readonly title: String;
    readonly content: String;
    readonly author: String;
    readonly createdTime: Date;
    readonly lastUpdatedTime: Date;
}