import { Document } from 'mongoose';

export interface UserInterface extends Document {
    readonly name: String;
    readonly numberOfPosts: Number;
    readonly createdTime: Date;    
}