import { Controller, Get, UseGuards, HttpStatus, HttpCode } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { AccessTokenGuard } from "src/global/lib/jwt/guard/access-token.guard";
import { ReasonPhrases } from "http-status-codes";
import { GeneralResponse } from "src/global/response/dto/response.dto";


@Controller('user')
export class UserController {
    constructor(private readonly userervice : UserService){}

    @HttpCode(HttpStatus.OK)
    @Get()
    @UseGuards(AccessTokenGuard)
    async getAllUser(): Promise<GeneralResponse> {
        const result = await this.userervice.readAll()
        return GeneralResponse.of({
            code: HttpStatus.OK,
            message: ReasonPhrases.OK,
            data: result
        })
    }
}