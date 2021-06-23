import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostInterface } from './interfaces/interfacces';

@Injectable()
export class PostsService {

  constructor(
    @Inject('COMMENT_MODEL')
    private comModel: Model<PostInterface>,
  ) {}
  
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
