import { PrismaService } from "prisma/service/prisma.service";
import { User } from "../domain/user.model";
import { Injectable } from "@nestjs/common";
import { UserInterface } from "./user.interface";


@Injectable()
export class UserService implements UserInterface {
    constructor(private readonly prismaService: PrismaService){}

    async readAll(): Promise<User[]> {
        const users = await this.prismaService.user.findMany()
        return users
    }
}