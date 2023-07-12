import { Entity, Index, Property, Unique } from '@mikro-orm/core';

import { BaseEntity } from './base.entity';

@Entity({ tableName: 'user' })
export class UserEntity extends BaseEntity {
  @Index({ name: 'first_name_index' })
  @Property({ columnType: 'varchar', default: '', length: 255 })
  first_name: string;

  @Index({ name: 'last_name_index' })
  @Property({ columnType: 'varchar', default: '', length: 255 })
  last_name: string;

  @Property({ name: 'full_name', persist: false })
  getFullName() {
    return `${this.first_name} ${this.last_name}`;
  }

  @Unique()
  @Property({ columnType: 'varchar', default: '', length: 255 })
  email: string;
}
