import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsOptional, IsString, Length} from 'class-validator';
import {Transform} from "class-transformer";

export class CreateUserDtoTest {
   @ApiProperty({example: 'example.jpg', description: 'Image'})
   readonly image: string;

   @ApiProperty({example: 'yuv45gh', description: 'id current device'})
   @Length(2, 255, {message: 'Min length 2 max length 255'})
   @IsString({message: 'Id device should be string'})
   readonly id: string;



   @ApiProperty({example: 'This is very interesting user', description: 'Bio user'})
   @IsOptional()
   @Length(3, 255, {message: 'Min length 3 max length 255'})
   @IsString({message: 'Bio should be string'})
   readonly bio: string;


}
