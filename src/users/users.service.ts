import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interfaces/interfaces';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_MODEL')
    private comModel: Model<UserInterface>,
  ) {}

  create(createUserDto: CreateUserDto) {
    console.log('added Comment');
    const createPost=new this.comModel(createUserDto);
    return 'This action adds a new user';  } 

  async findAll() {
    const que:any= await this.comModel.find().exec();
    return que;
  }

  async findOne(id: string) {
    const que:any= await this.comModel.findById(id).exec();
    return `This action returns a #${que} comment`;
    }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let toUpdate:any= await this.comModel.findById(id).exec();
    let updated = Object.assign(toUpdate, updateUserDto);
    const article = await updated.save();
    return `This action updates a `+article;
  }

  async remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
