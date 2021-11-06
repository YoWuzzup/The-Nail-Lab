import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StaffController } from './staff.controller';
import { StaffSchema } from './staff.model';
import { StaffService } from './staff.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Staff', schema: StaffSchema }]),
  ],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
