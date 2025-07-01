import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LogInterceptor } from './common/interceptors/log.interceptor';
import * as dotenv from 'dotenv';

const config = new DocumentBuilder()
  .setTitle('API NestJS')
  .setDescription('Documentación generada con Swagger')
  .setVersion('1.0')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  console.log("OPENAI_API_KEY =>", process.env.OPENAI_API_KEY);

  app.useGlobalInterceptors(new LogInterceptor());
  const config = new DocumentBuilder()
    .setTitle('API NestJS')
    .setDescription('Documentación generada con Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
