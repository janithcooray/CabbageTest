import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentInterface } from './interfaces/interfaces';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('COMMENT_MODEL')
    private comModel: Model<CommentInterface>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const createComment=new this.comModel(createCommentDto);
    await createComment.save();
    return 'ADDED COMMENT';
  }
 
  async findAll() {
    const que:any= await this.comModel.find().exec();
    return que;
  }

  async findOne(id: string) {
    const que:any= await this.comModel.findById(id).exec();
    return que;
  }

  async findForUser(user: string) {
    const que:any= await this.comModel.find({author:user}).exec();
    return que;
  }

  async findForPost(post: string) {
    const que:any= await this.comModel.find({postID:post}).exec();
    return que;
  }

  async update(id: string,userID:string, updateCommentDto: UpdateCommentDto) {
    let toUpdate:any= await this.comModel.findById(id).exec();
    if(toUpdate.author!=userID){
      return "NOT AUTHOR";
    }
    let updated = Object.assign(toUpdate, updateCommentDto);
    await updated.save();
    return `UPDATED`;
  }

  async remove(id: string,userID:string) {
    let toRemove:any= await this.comModel.findById(id).exec();
    if(toRemove.author!=userID){
      return "NOT AUTHOR";
    }
    await toRemove.delete();
    return `REMOVED`;
  }
}
