import { Entity, Index, Property, Unique } from '@mikro-orm/core';

import { BaseEntity } from './base.entity';
import { IUser } from '../interface/user.interface';

@Entity({ tableName: 'user' })
export class UserEntity extends BaseEntity implements IUser {
  @Index({ name: 'first_name_index' })
  @Property({ columnType: 'varchar', default: '', length: 255 })
  first_name: string;

  @Index({ name: 'last_name_index' })
  @Property({ columnType: 'varchar', default: '', length: 255 })
  last_name: string;

  @Property({ name: 'full_name', persist: false, getter: true })
  get full_name() {
    return this.first_name && this.last_name
      ? `${this.first_name} ${this.last_name}`
      : this.last_name
      ? this.first_name
      : '';
  }

  @Unique()
  @Property({ columnType: 'varchar', default: '', length: 255 })
  email: string;
}
