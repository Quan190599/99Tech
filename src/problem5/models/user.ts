import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<UserDocument>("User", userSchema);
