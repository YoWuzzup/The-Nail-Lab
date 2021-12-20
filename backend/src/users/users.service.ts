import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailService } from '../mails/mail.service';

import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    private mailService: MailService,
    @InjectModel('Users') private readonly usersModel: Model<Users>,
  ) {}

  async getUsers(): Promise<object> {
    const users: any = await this.usersModel.find().exec();

    return users?.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      appointments: user.appointments,
      confirmed: user.confirmed,
    }));
  }

  async registerNewUser(data: any): Promise<object> {
    const { email } = data;
    const user = await this.usersModel.findOne({ email }).exec();

    try {
      if (!user) {
        const newUser = new this.usersModel(data);
        const result = await newUser.save();

        await this.mailService.userSendEmail(result);
        return result;
      } else if (user && !user.confirmed) {
        await this.mailService.userSendEmail(user);

        return user;
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async findUser(email: string): Promise<Users> {
    let user;

    try {
      user = await this.usersModel.findOne({ email }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find the User.');
    }
    if (!user) {
      throw new NotFoundException('Could not find the User.');
    }
    return user;
  }
}
