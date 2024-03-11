import * as path from 'path';
import {ensureDir, writeFile} from 'fs-extra';
import {HttpException, HttpStatus} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

export class FileElementResponse {
   url: string;
   name: string;
}

export class FileService {
   async createFile(base64Image: string): Promise<FileElementResponse> {
      try {
         console.log('createFile!!');
         const filePath: string = path.join(__dirname, '../public/upload');
         await ensureDir(filePath);
         const fileName: string = `${uuidv4()}.jpg`;
         console.log('fileName',fileName);

         /*const base64Data = base64Image.replace(/^data:image\/jpeg;base64,/, '');
         console.log('base64Data',base64Data);*/

         await writeFile(path.join(filePath, fileName), `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`, 'base64');
         console.log('url',`${filePath}/${fileName}`);
         return { url: `${filePath}/${fileName}`, name: fileName };
      } catch (e) {
         throw new HttpException('Error writing file on disk', HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }
}