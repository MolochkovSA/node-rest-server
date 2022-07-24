import mongoose from 'mongoose';
import { MONGO_URL } from '../config.js';

export async function mongodbLoader() {
  const connection = await mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('Successful connected to DB');
  return connection;
}