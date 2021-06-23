import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PostProviders } from './posts.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService,...PostProviders]
})
export class PostsModule {}
