import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async userSendEmail(data: Record<string, any>) {
    await this.mailerService.sendMail({
      from: process.env.MAIL_USER,
      to: data.email,
      subject: `New message from ${process.env.MAIL_USER}`,
      template: './templates/confirmation',
      context: {
        id: data._id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    });
  }
}
