import { Document } from "mongoose";
export interface Player extends Document {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  category: string;
  password: string;
  userName: string;
  isVerified: boolean;
}
