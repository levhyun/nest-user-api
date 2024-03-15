import { Module } from "@nestjs/common";
import { UserController } from "../user.controller";
import { UserService } from "../../service/user.service";
import { PrismaService } from "prisma/service/prisma.service";



@Module({
    controllers : [UserController],
    providers: [UserService,PrismaService]
})
export class UserModule{}