import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class BaseEntity {
  @PrimaryKey({ columnType: 'bigint', type: 'bigint', autoincrement: true })
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
