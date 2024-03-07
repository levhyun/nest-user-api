import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import {Request,Response} from 'express'
import { JwtAuthGuard } from "src/auth/auth.guard";


@Controller('user')
export class UserController {
    constructor(private readonly userervice : UserService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllUser(@Req() request: Request, @Res() response: Response):Promise<any>{
        try{
            const result = await this.userervice.getAllUser();
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully fetch data!',
                result: result
            })
        }catch(err){
            return response.status(500).json({
                status: 'Ok!',
                message : 'Internal Server Error!'
            })
        }
    }
}