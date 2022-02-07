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

  async userSendEmail(recievedData: Record<string, any>) {
    const data = recievedData._doc;

    await this.mailerService.sendMail({
      from: process.env.MAIL_USER,
      to: recievedData.email || data.email,
      subject: `New message from ${process.env.MAIL_USER}`,
      template: './templates/confirmation',
      context: {
        id: recievedData._id || data._id,
        name: recievedData.name || data.name,
        email: recievedData.email || data.email,
        phone: recievedData.phone || data.phone,
        message: recievedData.message || data.message,
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
