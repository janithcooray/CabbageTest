import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserInterface } from 'src/users/interfaces/interfaces';
import { UsersController } from 'src/users/users.controller';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostInterface } from './interfaces/interfacces';

@Injectable()
export class PostsService {


  constructor(
    @Inject('POST_MODEL')
    private comModel: Model<PostInterface>,
    @Inject('USER_MODEL')
    private userModel: Model<UserInterface>) {}
  
  async create(createPostDto: CreatePostDto) {
    console.log('added post');
    const createPost=new this.comModel(createPostDto);
    await createPost.save();

    //increment User number of posts
    const que:any= await this.userModel.findById(createPostDto.author).exec();
    que.numberOfPosts=que.numberOfPosts+1;
    que.save();
    return "ADDED POST";
  }

  async findAll() {
    const que:any= await this.comModel.find().exec();
    return que;
  }

  async findOne(id: string) {
    const que:any= await this.comModel.findById(id).exec();
    return que;
  }

  async findUser(id: string) {
    const que:any= await this.comModel.find({'author':id}).exec();
    return que;
  }

  async update(postID: string,userID: string, updatePostDto: UpdatePostDto) {
    let toUpdate:any= await this.comModel.findById(postID).exec();
    if(toUpdate.author!=userID){
      return "NOT AUTHOR";
    }
    let updated = Object.assign(toUpdate, updatePostDto);
    const article = await updated.save();
    return "UPDATED";
  }

  async remove(postID: string,userID: string,) {
    const que:any= await this.comModel.findById(postID).exec();
    if(que.author!=userID){
      return "NOT AUTHOR";
    }
    
    que.remove();
    //increment User number of posts
    try{
      const del:any= await this.userModel.findById(userID).exec();
      del.numberOfPosts=del.numberOfPosts-1;
      del.save();
    }
    catch{
      console.log(userID+" No longer exists");
    }

    return "REMOVED";
  }
}
