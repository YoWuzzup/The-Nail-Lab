import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  cost: Number,
  bookingName: String,
  staff_name: String,
  staff_surname: String,
  staff_fullname: String,
  user_name: String,
  user_email: String,
  user_phone: Number,
  startDate: Date,
  endDate: Date,
});

export interface Booking extends mongoose.Document {
  cost: number;
  bookingName: string;
  staff_name: string;
  staff_surname: string;
  staff_fullname: string;
  user_name: string;
  user_email: string;
  user_phone: number;
  startDate: Date;
  endDate: Date;
}
