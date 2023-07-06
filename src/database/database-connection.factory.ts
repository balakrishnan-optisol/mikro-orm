import { MikroOrmModuleOptions, MikroOrmOptionsFactory } from '@mikro-orm/nestjs';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConnectionFactory implements MikroOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createMikroOrmOptions(): Promise<MikroOrmModuleOptions> {
    return {
      type: 'postgresql',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      user: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASSWORD'),
      dbName: this.configService.get('DB_NAME'),
      autoLoadEntities: true,
      entities: ['./dist/entities/**/*.ts'],
      entitiesTs: ['./src/entities/**/*.ts']
    } as MikroOrmModuleOptions;
  }
}
