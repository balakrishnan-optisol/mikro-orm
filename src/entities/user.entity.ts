import { Entity, Property } from '@mikro-orm/core';

import { BaseEntity } from './base.entity';

@Entity({ tableName: 'user' })
export class UserEntity extends BaseEntity {
  @Property()
  first_name: string;

  @Property()
  last_name: string;

  @Property()
  email: string;
}
