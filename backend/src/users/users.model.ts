import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  appointments: Array,
  confirmed: {
    type: Boolean,
    default: false,
  },
  message: String,
  password: String,
});

export interface Users extends mongoose.Document {
  name: string;
  email: string;
  phone: number;
  appointments: Array<string>;
  confirmed: boolean;
  message: string;
  password: string;
}
