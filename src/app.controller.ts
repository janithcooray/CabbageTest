import { Next, Render, Req, Res } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { join } from 'path';
import { AppService } from './app.service';

import { Request, Response } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  ///IGNORE HBS PAGES as i only created them for some testing!
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }


  @Get('Login')
  @Render('UserLogin')
  login() {
    return { message: 'Hello Login!' };
  }

  @Get('Create')
  @Render('UserCreate')
  userCreate() {
  }

  @Get('Home')
  @Render('UserHome')
  userHome() {
  }

  @Get('EditProfile')
  @Render('UserEdit')
  userEdit() {
  }


  //Posts
  @Get('MyPosts')
  @Render('PostMy')
  userPost() {
  }

  @Get('CreatePost')
  @Render('PostCreate')
  createPost() {
  }

  @Get('ViewPost')
  @Render('PostView')
  viewPost() {
  }

  
  @Get('EditPost')
  @Render('PostEdit')
  editPost() {
  }

  //Comments
  getHello( ) {
    return 'Hi'; 
  }


 
}
