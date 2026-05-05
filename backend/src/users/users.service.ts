import { Injectable } from '@nestjs/common';
import { usersDto } from './users.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: usersDto[] = [];

  create(newUser: usersDto) {
    newUser.id = uuid();
    newUser.password = bcryptHashSync(newUser.password, 10);
    this.users.push(newUser);
  }

  findByEmail(email: string): usersDto | undefined {
    return this.users.find((user) => user.email === email);
  }
}
