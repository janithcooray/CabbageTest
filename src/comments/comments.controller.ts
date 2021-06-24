import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }


  @Get('/My/:id')
  findMy(@Param('id') id: string) {
    return this.commentsService.findForUser(id);
  }

  @Get('/Post/:id')
  findCommnets(@Param('id') id: string) {
    return this.commentsService.findForPost(id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }
  

  @Patch('/:id/:user')
  update(@Param('id') id: string,@Param('user') user: string, @Body() updateCommentDto: UpdateCommentDto) {
    console.log("patching "+id);
    console.log(updateCommentDto);
    return this.commentsService.update(id, user,updateCommentDto);
  }

  @Delete('/:id/:user')
  remove(@Param('id') id: string,@Param('user') user: string) {
    return this.commentsService.remove(id,user);
  }
}
