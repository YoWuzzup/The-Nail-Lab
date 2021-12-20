import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('email')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post('confirmation/:userId')
  async getEmail(@Body() data: object) {
    return this.mailService.userConfirm(data);
  }
}
