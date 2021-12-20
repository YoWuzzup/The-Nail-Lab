import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDataDto } from './userData.dto';
import { MailService } from 'src/mails/mail.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private mailService: MailService,
  ) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();

    return users;
  }

  @Post()
  async registerNewUser(@Body() userData: UserDataDto): Promise<object> {
    return this.usersService.registerNewUser(userData);
  }
}
