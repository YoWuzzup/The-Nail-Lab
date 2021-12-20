import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Booking } from './booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
  ) {}

  async getBookings(): Promise<object> {
    const booking: any = await this.bookingModel.find().exec();

    return booking?.map((date: any) => ({
      staff_name: date.staff_name,
      staff_surname: date.staff_surname,
      user_name: date.user_name,
      user_email: date.user_email,
      start_date: date.start_date,
      end_date: date.end_date,
    }));
  }
}
