import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersDto } from './users.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Post()
  create(@Body() user: usersDto) {
    this.UsersService.create(user);
  }
}
