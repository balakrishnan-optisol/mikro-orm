import { Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';
import { UserEntity } from 'src/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  list(): Promise<UserEntity[]> {
    return this.userService.list();
  }
}
