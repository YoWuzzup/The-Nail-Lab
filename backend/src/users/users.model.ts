import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  appointments: Array,
  confirmed: {
    type: Boolean,
    default: false,
  },
});

export interface Users extends mongoose.Document {
  name: string;
  email: string;
  phoneNumber: number;
  appointments: Array<string>;
  confirmed: boolean;
}
