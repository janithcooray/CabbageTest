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
    const createUser=new this.comModel(createUserDto);
    createUser.save();
    return 'ADDED USER';  } 


  async findAll() {
    const que:any= await this.comModel.find().exec();
    return que;
  }

  async findOne(id: string) {
    const que:any= await this.comModel.findById(id).exec();
    return que;
  }

  async findUser(name: string) {
    const que:any= await this.comModel.findOne({'name':name}).exec();
    return que;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let toUpdate:any= await this.comModel.findById(id).exec();
    let updated = Object.assign(toUpdate, updateUserDto);
    const article = await updated.save();
    return `UPDATED`;
  }

  async remove(id: string) {
    let toREmove:any= await this.comModel.findById(id).exec();
    await toREmove.remove();
    return `REMOVED`;
  }
}
