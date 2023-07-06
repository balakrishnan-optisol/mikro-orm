import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

import { Injectable } from '@nestjs/common';

import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>
  ) {}

  list(): Promise<UserEntity[]> {
    return this.userRepository.find({}, {});
  }
}
