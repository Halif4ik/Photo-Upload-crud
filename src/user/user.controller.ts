import {
   Controller,
   Post,
   Body,
   UseInterceptors,
   UsePipes,
   ValidationPipe, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, HttpStatus, HttpCode
} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/create-user.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import * as process from 'process';
import {IUser} from "./interface/customResponces";
import {ConfigService} from "@nestjs/config";
import {GeneralResponse} from "./interface/generalResponse.interface";
import {ApiResponseServ} from "../interceptor/api.response.dto";
import {User} from "@prisma/client";
import {UserClass} from "./entities/user.entity";
import {CreateUserDtoTest} from "./dto/create-user-test.dto";

@ApiTags('CRUD User')
@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService, private readonly configService: ConfigService) {
   }

   //1.All Users can create new account
   //Endpoint: Post /api/user/create
   @Post('create')
   @HttpCode(200)
   @ApiResponse({
      status: 200,
      description: 'User created successfully',
      type: UserClass,
   })
   @ApiOperation({summary: 'Created User in database'})
   @UseInterceptors(FileInterceptor('image'))
   @UsePipes(new ValidationPipe({transform: true, whitelist: true}))
   createUser(@Body() createUserDto: CreateUserDto, @UploadedFile(
       new ParseFilePipe({
          validators: [
             new MaxFileSizeValidator({
                maxSize: 1024 * 1024 * +process.env.MAX_FILE_SIZE_MB,
             }),
             new FileTypeValidator({fileType: 'image/jpeg'}),
          ],
       }),
   ) file: Express.Multer.File): Promise<User> {
      return this.userService.createUser(createUserDto, [file]);
   }

   //2.test endpoint
   //Endpoint: Post /api/user/createTest
  /* @Post('createTest')
   @UsePipes(new ValidationPipe({transform: true}))
   createUserTest( @Body() createUserDtoTest: CreateUserDtoTest,
                   @UploadedFile()file: Express.Multer.File): Promise<any> {
      console.log(`Controller- `);
      return this.userService.createUserTest( createUserDtoTest);
   }*/

}
