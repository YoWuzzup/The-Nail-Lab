import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Users } from '../users/users.model';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    @InjectModel('Users') private readonly usersModel: Model<Users>,
  ) {}

  async userSendEmail(data: Record<string, any>) {
    await this.mailerService.sendMail({
      from: process.env.MAIL_USER,
      to: data?.email,
      subject: `New message from ${process.env.MAIL_USER}`,
      template: './templates/confirmation',
      context: {
        id: data?._id,
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        message: data?.message,
      },
    });
  }

  async userConfirm(data: Record<string, any>) {
    const { id, confirmed } = data;
    const user = await this.usersModel.findOne({ id }).exec();
    if (confirmed) {
      user.confirmed = confirmed;
    }
    user.save();
  }
}
