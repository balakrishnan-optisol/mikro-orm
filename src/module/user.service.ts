import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get(): string {
    return 'Hello World!';
  }
}
