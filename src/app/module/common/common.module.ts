import { Module } from '@nestjs/common';

import { UserEntity } from '../../entities/user.entity';

export const entities = [UserEntity];

@Module({})
export class CommonModule {}
