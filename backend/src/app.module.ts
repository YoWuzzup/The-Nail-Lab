import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServiceModule } from './service/service.module';
import { StaffModule } from './staff/staff.module';
import { BookingModule } from './booking/booking.module';
import { UsersModule } from './users/users.module';
import { MailModule } from './mails/mail.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get(
          'MONGODB_LOGIN',
        )}:${configService.get(
          'MONGODB_PASSWORD',
        )}@maindb.kpw8u.mongodb.net/NailLab`,
      }),
      inject: [ConfigService],
    }),
    ServiceModule,
    StaffModule,
    BookingModule,
    UsersModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
