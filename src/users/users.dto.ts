import { IsEmail, IsString } from 'class-validator';

export class UsersDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  readonly password: string;
}
