import {Module} from '@nestjs/common';
import {ServeStaticModule} from "@nestjs/serve-static";
import {ConfigModule} from "@nestjs/config";
import * as path from 'node:path';
import {PrismaService} from "./prisma.service";
import {FileService} from "./file.service";
import { UserModule } from './user/user.module';

@Module({
   imports: [ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
   }),
      ServeStaticModule.forRoot({
         rootPath: path.join(__dirname, '../public'),
      }),
      UserModule,],
   providers: [PrismaService, FileService],
})
export class AppModule {
}
