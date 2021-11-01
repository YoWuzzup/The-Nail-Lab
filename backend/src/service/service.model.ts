import * as mongoose from 'mongoose';

export const ServiceSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  cost: Number,
  image: String,
  type: Array,
});

export interface Service extends mongoose.Document {
  id: string;
  name: string;
  duration: number;
  cost: number;
  image: string;
  type: Array<string>;
}
