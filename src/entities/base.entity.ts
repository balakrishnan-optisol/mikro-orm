import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ abstract: true })
export abstract class BaseEntity {
  @PrimaryKey({ columnType: 'bigint', type: 'bigint', autoincrement: true })
  id!: number;

  @Property({ columnType: 'timestamp' })
  createdAt: Date = new Date();

  @Property({ columnType: 'timestamp', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
