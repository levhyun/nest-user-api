import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './domain/user/presentation/module/user.module';
import { AuthModule } from './domain/auth/presentation/module/auth.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './global/middleware/logger.middleware';
import { EnvConfig } from './global/config/env.config';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(EnvConfig),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}