import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUser } from '../interface/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  list(): Promise<IUser[]> {
    return this.userService.list();
  }

  @Post()
  add(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.userService.add(createUserDto);
  }
}
