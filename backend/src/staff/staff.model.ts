import * as mongoose from 'mongoose';

export const StaffSchema = new mongoose.Schema({
  name: String,
  surname: String,
  staff_image: String,
  info: Array,
  experience: Number,
  available_service: Array,
  start_time: Date,
  end_time: Date,
  day_offs: Array,
  samples: Array,
});

export interface Staff extends mongoose.Document {
  name: string;
  surname: string;
  staff_image: string;
  info: Array<string>;
  experience: number;
  available_service: Array<string>;
  start_time: Date;
  end_time: Date;
  day_offs: Array<string>;
  samples: Array<string>;
}
