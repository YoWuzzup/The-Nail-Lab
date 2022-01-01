import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  staff_name: String,
  staff_surname: String,
  staff_fullname: String,
  user_name: String,
  user_email: String,
  startDate: Date,
  endDate: Date,
});

export interface Booking extends mongoose.Document {
  staff_name: string;
  staff_surname: string;
  staff_fullname: string;
  user_name: string;
  user_email: string;
  startDate: Date;
  endDate: Date;
}
