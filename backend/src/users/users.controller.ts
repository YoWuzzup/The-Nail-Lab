import { Body, Controller, Get, Post, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDataDto } from './userData.dto';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();

    return users;
  }

  @Post('register')
  async registerNewUser(@Body() userData: UserDataDto): Promise<object> {
    return this.usersService.registerNewUser(userData);
  }

  @Post('login')
  async login(
    @Body() data: any,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.usersService.login(data, response);
  }

  @Get('user')
  async user(@Req() request: Request) {
    return this.usersService.user(request);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    return this.usersService.logout(response);
  }
}
