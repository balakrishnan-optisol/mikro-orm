import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ abstract: true })
export abstract class BaseEntity {
  @PrimaryKey({ columnType: 'bigint', type: 'bigint', autoincrement: true, primary: true })
  id: number;

  @Property({ columnType: 'timestamp', default: 'now()' })
  createdAt: Date = new Date();

  @Property({ columnType: 'timestamp', default: 'now()', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
