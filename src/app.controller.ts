import { Render } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
  }

  @Get('/Home')
  @Render('index')
  home() {
  }

  @Get('/Post')
  @Render('index')
  posts() {
  }

  @Get('/Comment')
  @Render('index')
  comment() {
  }
}
