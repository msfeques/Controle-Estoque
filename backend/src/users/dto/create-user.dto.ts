import {
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name!: string;
  @IsEmail()
  @MaxLength(150)
  email!: string;
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password!: string;
}
