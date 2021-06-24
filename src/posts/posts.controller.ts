import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('/My/:id')
  findByUser(@Param('id') id: string) {
    return this.postsService.findUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch('/:post/:user')
  update(@Param('post') id: string,@Param('user') user: string, @Body() updatePostDto: UpdatePostDto) {
    console.log("patching "+id);
    console.log(updatePostDto);
    return this.postsService.update(id,user, updatePostDto);
  }

  @Delete('/:post/:user')
  remove(@Param('post') id: string,@Param('user') user: string) {
    return this.postsService.remove(id,user);
  }
}
