import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Staff } from './staff.model';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<Staff>,
  ) {}

  async getStaff(): Promise<object> {
    const staff: any = await this.staffModel.find().exec();

    return staff?.map((person: any) => ({
      id: person.id,
      name: person.name,
      surname: person.surname,
      staff_image: person.staff_image,
      info: person.info,
      experience: person.experience,
      available_service: person.available_service,
      start_time: person.start_time,
      end_time: person.end_time,
      day_offs: person.day_offs,
      samples: person.samples,
    }));
  }
}
