import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDataDto } from './userData.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();

    return users;
  }

  @Post()
  async registerNewUser(@Body() userData: UserDataDto): Promise<object> {
    console.log(userData);

    return this.usersService.registerNewUser(userData);
  }
}
