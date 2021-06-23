import { Document } from 'mongoose';

export interface PostInterface extends Document {
    readonly name: String;
    readonly numberOfPosts: Number;
    readonly createdTime: Date;    
}