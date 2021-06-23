import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './users.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService,...UserProviders]
})
export class UsersModule {}
