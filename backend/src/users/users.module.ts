import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { UsersController } from './users.controller';
import { UsersSchema } from './users.model';
import { UsersService } from './users.service';
import { MailModule } from 'src/mails/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
    MailModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, ConfigService],
})
export class UsersModule {}
