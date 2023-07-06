import helmet from 'helmet';
// import YAML from 'yamljs';
// import path from 'path';

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
// import { OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log']
  });
  const configService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true
    })
  );

  app.enableCors({
    origin: '*'
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // const swaggerDocument: OpenAPIObject = YAML.load(path.join(__dirname, 'assets/user.yaml'));

  // swaggerDocument.servers = [
  //   {
  //     description: configService.get('ENVIRONMENT'),
  //     url: configService.get('API_BASE_URL')
  //   }
  // ];
  // SwaggerModule.setup('users/docs', app, swaggerDocument, {
  //   useGlobalPrefix: true
  // });

  app.use(helmet());

  const port = configService.get('PORT', 3000);

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();
