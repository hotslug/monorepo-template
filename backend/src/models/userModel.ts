import type { Document } from 'mongoose';
import mongoose from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  first_name: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
