import {ApiProperty} from '@nestjs/swagger';
import {IsUrl, IsOptional, IsString, isURL, Length} from 'class-validator';
import {Transform} from "class-transformer";

export class CreateUserDto {
   @ApiProperty({example: 'example.jpg', description: 'Image'})
   readonly image: string;

   @Transform(({value}) => {
      return value.toString() === 'true';
   })
   @ApiProperty({example: true, description: 'Date mode'})
   readonly dateMode: boolean;

   @ApiProperty({example: 'yuv45gh', description: 'id current device'})
   @Length(2, 255, {message: 'id Min length 2 max length 255'})
   @IsString({message: 'Id device should be string'})
   readonly id: string;

   @ApiProperty({example: 'John', description: 'Name current user'})
   @Length(2, 255, {message: 'name Min length 2 max length 255'})
   @IsString({message: 'Name should be string'})
   readonly name: string;

   @ApiProperty({example: 'Developer', description: 'Job current user'})
   @Length(2, 255, {message: 'job Min length 2 max length 255'})
   @IsString({message: 'Job should be string'})
   readonly job: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'This is very interesting user', description: 'Bio user'})
   @IsOptional()
   @Length(3, 255, {message: 'Bio Min length 3 max length 255'})
   @IsString({message: 'Bio should be string'})
   readonly bio: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'https://www.linkedin.com/in/johndoe', description: 'Linkedin'})
   @IsUrl({require_protocol: true}, {message: 'Linkedin should be URL'})
   @Length(3, 255, {message: 'linkedIn Min length 3 max length 255'})
   @IsOptional()
   readonly linkedIn: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'https://www.instagram.com/johndoe', description: 'Instagram'})
   @IsOptional()
   @Length(25, 255, {message: 'Instagram Min length 25 max length 255'})
   @IsString({message: 'Instagram should be string'})
   readonly instagram: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'https://www.twitter.com/johndoe', description: 'Twitter'})
   @IsOptional()
   @Length(25, 255, {message: 'Twitter Min length 25 max length 255'})
   @IsString({message: 'Twitter should be string'})
   readonly twitter: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'https://www.johndoe.com', description: 'Website'})
   @IsOptional()
   @Length(18, 255, {message: 'Website Min length 18 max length 255'})
   @IsString({message: 'Website should be string'})
   readonly website: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'This is very interesting user', description: 'Goals user'})
   @IsOptional()
   @Length(3, 255, {message: 'Min length 3 max length 255'})
   @IsString({message: 'Goals should be string'})
   readonly goals: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'Male', description: 'Gender user'})
   @IsOptional()
   @Length(2, 255, {message: 'Min length 2 max length 255'})
   @IsString({message: 'Gender should be string'})
   readonly gender: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'Heterosexual', description: 'Sexuality user'})
   @IsOptional()
   @Length(2, 255, {message: 'Min length 2 max length 255'})
   @IsString({message: 'Gender should be string'})
   readonly sexuality: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'Jane Doe', description: 'Partner user'})
   @IsOptional()
   @Length(2, 255, {message: 'Min length 2 max length 255'})
   @IsString({message: 'Partner should be string'})
   readonly partner: string;

   @Transform(({value}) => {
      if( value.trim() === '') return null;
      return value;
   })
   @ApiProperty({example: 'What is your favorite color?', description: 'Icebreaker user'})
   @IsOptional()
   @Length(2, 255, {message: 'Icebreaker Min length 2 max length 255'})
   @IsString({message: 'Icebreaker should be string'})
   readonly icebreaker: string;

}
