import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import { UserService } from './app/module/user.service';

import { UserController } from './app/module/user.controller';
import { DatabaseConnectionFactory } from './database/database-connection.factory';
import { CommonModule, entities } from './app/module/common/common.module';
import { AllExceptionsFilter } from './app/filter/all-exception.filter';

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
  providers: [
    UserService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }
  ]
})
export class AppModule {}
