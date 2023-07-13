import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

import { Injectable } from '@nestjs/common';

import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUser } from '../interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userDao: EntityRepository<IUser>,
    private readonly entityManager: EntityManager
  ) {}

  list(): Promise<IUser[]> {
    return this.userDao.find(
      {},
      {
        fields: ['first_name', 'last_name']
      }
    );
  }

  add(createUserDto: CreateUserDto): Promise<IUser> {
    return this.entityManager.insert(UserEntity, createUserDto);
  }
}
