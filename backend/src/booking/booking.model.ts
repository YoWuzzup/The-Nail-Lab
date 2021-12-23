import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  staff_name: String,
  staff_surname: String,
  staff_fullname: String,
  user_name: String,
  user_email: String,
  start_date: Date,
  end_date: Date,
});

export interface Booking extends mongoose.Document {
  staff_name: string;
  staff_surname: string;
  staff_fullname: string;
  user_name: string;
  user_email: string;
  start_date: Date;
  end_date: Date;
}
