import { HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {FileElementResponse, FileService} from "../file.service";
import {PrismaService} from "../prisma.service";
import {ConfigService} from "@nestjs/config";
import {User} from "@prisma/client";
import {CreateUserDtoTest} from "./dto/create-user-test.dto";

@Injectable()
export class UserService {
   private readonly logger: Logger = new Logger(UserService.name);

   constructor(private fileService: FileService,
               private prisma: PrismaService, private readonly configService: ConfigService) {
   }

   async createUser(createUserDto: CreateUserDto, images: Express.Multer.File[]): Promise<User> {
      const userInDB: User | null = await this.prisma.user.findUnique({
         where: {
            deviceId: createUserDto.id,
         },
      })
      if (userInDB)
         throw new HttpException('User with this device id already exist in db', HttpStatus.CONFLICT);

      const fileSaved: FileElementResponse = await this.fileService.createFile(images);

      const newUser: User = await this.prisma.user.create({
         data: {
            image: fileSaved.name,
            deviceId: createUserDto.id,
            dateMode: createUserDto.dateMode,
            name: createUserDto.name,
            job: createUserDto.job,
            bio: createUserDto.bio,
            linkedIn: createUserDto.linkedIn,
            instagram: createUserDto.instagram,
            twitter: createUserDto.twitter,
            website: createUserDto.website,
            goals: createUserDto.goals,
            gender: createUserDto.gender,
            sexuality: createUserDto.sexuality,
            partner: createUserDto.partner,
            icebreaker: createUserDto.icebreaker,
         },
      });

      this.logger.log(`Created new user- ${newUser.id}`);
      return newUser
   }

   async createUserTest( createUserDto: CreateUserDtoTest): Promise<any> {

      console.log(`SErvice- `,createUserDto);
      return 'newUser'
   }
}
