import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Module } from '@nestjs/common';

import { UserEntity } from 'src/entities/user.entity';

export const entities = [UserEntity];

@Module({
  imports: [MikroOrmModule.forFeature(entities)]
})
export class CommonModule {}
