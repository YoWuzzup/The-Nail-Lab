import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailService } from '../mails/mail.service';
import * as bcrypt from 'bcrypt';
import { Response, Request } from 'express';
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
        const saving = await newUser.save();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = saving;

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

  async login(data: any, response: Response) {
    const { email, password } = data;
    const user = await this.usersModel.findOne({ email }).exec();

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Wrong password or email',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const jwt = await this.jwtService.signAsync({ user });

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      user: {
        name: user.name,
        confirmed: user.confirmed,
        email: user.email,
        phone: user.phone,
        appointments: user.appointments,
      },
    };
  }

  async user(request: Request) {
    try {
      const cookie = request.cookies.jwt;

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.usersModel.findOne({ id: data.id });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async logout(response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'success',
    };
  }

  async findUser(email: string): Promise<Users> {
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
