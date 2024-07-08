import { FilterQuery } from "mongoose";
import { User, UserDocument } from "../models";

export class UserService {
  async createUser(userData: Partial<UserDocument>): Promise<UserDocument> {
    const user = new User(userData);
    return user.save();
  }

  async getListUsers(
    filters: FilterQuery<UserDocument> = {}
  ): Promise<UserDocument[]> {
    return User.find(filters).exec();
  }

  async getUser(id: string): Promise<UserDocument | null> {
    return User.findById(id).exec();
  }

  async updateUser(
    id: string,
    userData: Partial<UserDocument>
  ): Promise<UserDocument | null> {
    return User.findByIdAndUpdate(id, userData, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<UserDocument | null> {
    return User.findByIdAndDelete(id).exec();
  }
}
