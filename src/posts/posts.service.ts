import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostInterface } from './interfaces/interfacces';

@Injectable()
export class PostsService {

  constructor(
    @Inject('POST_MODEL')
    private comModel: Model<PostInterface>,
  ) {}
  
  create(createPostDto: CreatePostDto) {
    console.log('added post');
    const createPost=new this.comModel(createPostDto);
    return 'This action adds a new post';
  }

  async findAll() {
    const que:any= await this.comModel.find().exec();
    return que;
  }

  async findOne(id: number) {
    const que:any= await this.comModel.findById(id).exec();
    return `This action returns a #${que} comment`;
    }

  async update(id: string, updatePostDto: UpdatePostDto) {
    let toUpdate:any= await this.comModel.findById(id).exec();
    let updated = Object.assign(toUpdate, updatePostDto);
    const article = await updated.save();
    return `This action updates a `+article;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
