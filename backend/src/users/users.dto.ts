import {
  IsString,
  IsUUID,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class usersDto {
  @IsUUID()
  @IsOptional()
  id!: string;
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  name!: string;
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  email!: string;
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  password!: string;
}
