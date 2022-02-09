import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Booking } from './booking.model';
import { Users } from '../users/users.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
    @InjectModel('Users') private readonly usersModel: Model<Users>,
  ) {}

  async getBookings(query: any): Promise<object> {
    let booking: any;

    if (query.staff_fullname === 'All staff') {
      booking = await this.bookingModel.find().exec();
    } else {
      booking = await this.bookingModel.find(query).exec();
    }

    return booking?.map((data: any) => ({
      cost: data.cost,
      bookingName: data.bookingName,
      staff_name: data.staff_name,
      staff_surname: data.staff_surname,
      staff_fullname: data.staff_fullname,
      startDate: data.startDate,
      endDate: data.endDate,
      user_name: data.user_name,
      user_email: data.user_email,
      user_phone: data.user_phone,
    }));
  }

  async singleStaffBookings(staffName: string): Promise<object> {
    const bookings: any = await this.bookingModel
      .find({ staff_name: staffName })
      .exec();

    return bookings;
  }

  async addNewBooking(data: any) {
    const { staff, startDate, user_email } = data;
    const booking = await this.bookingModel
      .findOne({ staff_fullname: staff, startDate })
      .exec();

    try {
      if (!booking) {
        const user = await this.usersModel.findOne({ user_email }).exec();

        const newBooking = new this.bookingModel({
          ...data,
          bookingName: data.name,
          staff_fullname: data.staff,
          staff_surname: data.staff.split(' ')[1],
          staff_name: data.staff.split(' ')[0],
          user_name: data.user_name,
        });
        const savingBooking = await newBooking.save();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const updatedUser = await this.usersModel.updateOne(
          { _id: user._id },
          {
            $push: { appointments: savingBooking },
          },
        );

        return savingBooking;
      } else {
        return { message: 'The time is busy' };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
