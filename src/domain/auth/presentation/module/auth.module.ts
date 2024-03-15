import { Module } from '@nestjs/common';
import { AuthController } from '../auth.controller';
import { AuthService } from '../../service/auth.service';
import { PrismaService } from 'prisma/service/prisma.service';
import { UserModule } from 'src/domain/user/presentation/module/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from 'src/global/lib/jwt/strategy/access-token.strategy';
import { RefreshTokenStrategy } from 'src/global/lib/jwt/strategy/refresh-token.strategy';
import { TokenService } from 'src/global/lib/jwt/service/token.service';




@Module({
    controllers: [AuthController],
    providers:[AuthService,PrismaService,TokenService,AccessTokenStrategy,RefreshTokenStrategy],
    imports:[
        UserModule,
        PassportModule,
        JwtModule.register({})
    ]
})
export class AuthModule{}