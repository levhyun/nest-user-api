import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt';
import { RegisterDto } from "./dto/register.dto";
import { User } from "src/user/user.model";

@Injectable()
export class AuthService{

    constructor(
        private readonly prismaService: PrismaService,
        private jwtService: JwtService,
        private readonly userService: UserService){}

    
    async login(loginDto: LoginDto):Promise<any>{
        const {username,password} = loginDto;

        const user = await this.prismaService.user.findUnique({
            where: {username}
        })

        if(!user){
            throw new NotFoundException('user not found')
        }

        const validatePassword = await bcrypt.compare(password,user.password)

        if(!validatePassword){
            throw new NotFoundException('Invalid password')
        }

        return {
            token: this.jwtService.sign({username})
        }
    }



    async register (createDto: RegisterDto): Promise<any>{
        const createUser = new User();
        createUser.name = createDto.name;
        createUser.email = createDto.email;
        createUser.username = createDto.username;
        createUser.password = await bcrypt.hash(createDto.password, 10);

        const user = await this.userService.createUser(createUser);

        return {
            token: this.jwtService.sign({ username: user.username }),
        };
    }
    
}