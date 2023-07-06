import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserService } from './module/user.service';

import { UserController } from './module/user.controller';
import { DatabaseConnectionFactory } from './database/database-connection.factory';
import { CommonModule, entities } from './module/common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    MikroOrmModule.forRootAsync({
      useClass: DatabaseConnectionFactory
    }),
    MikroOrmModule.forFeature(entities),
    CommonModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class AppModule {}
