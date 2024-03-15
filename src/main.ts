import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipeSetting } from './global/validator/request.validator';
import { EnvService } from './global/env/env.service';
import { ExceptionFilter } from './global/exception/filter/exception.filter';
import { CorsConfig } from './global/config/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors(CorsConfig)
  app.useGlobalPipes(ValidationPipeSetting)
  app.useGlobalFilters(new ExceptionFilter())

  await app.listen(EnvService.getPort())
}
bootstrap()

// TODO: 본인 인증, 권한