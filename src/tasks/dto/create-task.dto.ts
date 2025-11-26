import { IsString, isString } from "class-validator"

export class CreateTaskDto{
 @IsString()
 title:string;

 @IsString()
 description:string;
}