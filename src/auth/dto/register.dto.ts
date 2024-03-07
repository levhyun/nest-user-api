import { IsString, Length } from "class-validator";


export class RegisterDto {

    @IsString()
    @Length(5,10)
    username: string;

    @IsString()
    @Length(6,12)
    password: string

    @IsString()
    @Length(5,10)
    name: string
    
    @IsString()
    @Length(5,10)
    email:string
}