import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('creating User '+createUserDto.name);
    return this.usersService.create(createUserDto);
  }


  @Get()
  findAll() {
    console.log("Getting all Users");
    return this.usersService.findAll();
  }


  @Get('/Login/:name')
  Login(@Param('name') name: string) {
    return this.usersService.findUser(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log("patching "+id);
    console.log(updateUserDto);
    return this.usersService.update(id, updateUserDto);
    }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
