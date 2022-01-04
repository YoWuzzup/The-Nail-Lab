import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  Res,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailService } from '../mails/mail.service';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    private mailService: MailService,
    private jwtService: JwtService,
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
        const hashedPass = await bcrypt.hash(data.password, 12);
        const newUser = new this.usersModel({ ...data, password: hashedPass });
        const result = await newUser.save();

        await this.mailService.userSendEmail(result);
        return result;
      } else if (user && !user.confirmed) {
        await this.mailService.userSendEmail(user);

        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login(data: any, @Res({ passthrough: true }) response: Response) {
    const { email, password } = data;
    const user = await this.usersModel.findOne({ email }).exec();
    console.log(user.id);

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }
    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });

    return { message: 'success' };
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
