import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Booking } from './booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
  ) {}

  async getBookings(query: any): Promise<object> {
    let booking: any;

    if (query.staff_fullname === 'All staff') {
      booking = await this.bookingModel.find().exec();
    } else {
      booking = await this.bookingModel.find(query).exec();
    }

    return booking?.map((date: any) => ({
      staff_name: date.staff_name,
      staff_surname: date.staff_surname,
      staff_fullname: date.staff_fullname,
      user_name: date.user_name,
      user_email: date.user_email,
      start_date: date.start_date,
      end_date: date.end_date,
    }));
  }

  async singleStaffBookings(staffName: string): Promise<object> {
    const bookings: any = await this.bookingModel
      .find({ staff_name: staffName })
      .exec();

    return bookings;
  }
}
