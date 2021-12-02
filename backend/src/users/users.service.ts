import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Users } from './users.model';
import * as templates from './user.templates';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UsersService {
  constructor(
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
    // const user: any = await this.findUser(data.email);
    const { email } = data;
    const user = await this.usersModel.findOne({ email }).exec();

    try {
      if (!user) {
        console.log(`no user: ${email}`);
        const newUser = new this.usersModel(data);
        const result = await newUser.save();
        await this.sendEmail(email, templates.confirming(result._id));
        return result;
      }
      // if we have a user dont he didn't confirm
      else if (user && !user.confirmed) {
        console.log('probably yes user');

        return user;
      } else {
        // res.json({ msg: msgs.alreadyConfirmed });
      }
    } catch (error) {
      console.log(error);
    }

    // if (!user) {
    //   console.log('worked');

    //   const user = await this.usersModel.findOne({ email }).exec();
    //   await user
    //     .create(data)
    //     // .then((newUser) =>
    //     //   this.sendEmail(newUser.email, templates.confirming(newUser._id)),
    //     // )
    //     .catch((err: any) => console.log(err));
    // } else if (user && !user.confirmed) {
    //   console.log('not confirmed');
    // } else {
    //   console.log('else block');
    // }

    // return user;
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

  // sending an email
  private async sendEmail(to: any, content: any): Promise<any> {
    const credentials = {};
    console.log(to);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      // These environment variables will be pulled from the .env file
      auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASS}`,
      },
    });

    // The from and to addresses for the email that is about to be sent.
    const contacts = async () => ({
      from: `${process.env.MAIL_USER}`,
      to: to,
    });

    // Combining the content and contacts into a single object that can
    // be passed to Nodemailer.
    const email = await Object.assign({}, content, contacts);

    await transporter.sendMail(email);
  }
}
