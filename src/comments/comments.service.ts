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

  create(createCommentDto: CreateCommentDto) {
    console.log('added comment');
    const createComment=new this.comModel(createCommentDto);
    return createComment.save();
  }
 
  async findAll() {
    const que:any= await this.comModel.find().exec();
    return que;
  }

  async findOne(id: string) {
    const que:any= await this.comModel.findById(id).exec();
    return `This action returns a #${que} comment`;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    let toUpdate:any= await this.comModel.findById(id).exec();
    let updated = Object.assign(toUpdate, updateCommentDto);
    const article = await updated.save();
    return `This action updates a `+article;
  }

  async remove(id: string) {
    let toRemove:any= await this.comModel.findById(id).exec();
    toRemove.delete();
    return `This action removes a #${id} comment`;
  }
}
