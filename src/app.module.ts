import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './domain/user/presentation/module/user.module';
import { AuthModule } from './domain/auth/presentation/module/auth.module';
import { ConfigModule } from '@nestjs/config';
// import { StatusMonitorModule } from 'nest-status-monitor';
// import { MonitorConfig } from './global/config/monitor.config';
import { LoggerMiddleware } from './global/middleware/logger.middleware';
import { EnvConfig } from './global/config/env.config';

@Module({
  imports: [
    // StatusMonitorModule.setUp(MonitorConfig),
    ConfigModule.forRoot(EnvConfig),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}