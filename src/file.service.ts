import * as path from 'path';
import {ensureDir, writeFile} from 'fs-extra';
import {HttpException, HttpStatus} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

export class FileElementResponse {
   url: string;
   name: string;
}

export class FileService {
   async createFile(files: Express.Multer.File[]): Promise<FileElementResponse> {
      try {
         console.log('createFile!!');
         const filePath: string = path.join(__dirname, '../public/upload');
         await ensureDir(filePath);
         const fileName: string = `${uuidv4()}.${files[0].originalname.split('.').pop()}`

         await writeFile(path.join(filePath, fileName), files[0].buffer);
         return files ? ({url: `${filePath}/${fileName}`, name: fileName}) : null;
      } catch (e) {
         throw new HttpException('Error write file on disk', HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }
}