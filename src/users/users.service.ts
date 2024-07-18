import { ForbiddenException, Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { DATABASE_PATH } from '../common/constants/global.constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async create(user: CreateUserDto) {
    const users: CreateUserDto[] = await this.findAll();
    users.push(user);
    await fs.writeFile(DATABASE_PATH, JSON.stringify(users));
  }

  async findAll(): Promise<CreateUserDto[]> {
    const data = await fs.readFile(DATABASE_PATH);
    return JSON.parse(data.toString());
  }

  async findOne(name: string) {
    const users = await this.findAll();

    const user = users.find((user) => user.name == name);

    if (!user) throw new ForbiddenException('mensaje hola');

    return user;
  }

  async update(name: string, user: UpdateUserDto) {
    const users = await this.findAll();
    const index = users.findIndex((user) => user.name == name);

    users[index] = { ...users[index], ...user };

    await fs.writeFile(DATABASE_PATH, JSON.stringify(users));
  }

  async remove(name: string) {
    const users = await this.findAll();
    const index = users.findIndex((user) => user.name == name);
    users.splice(index, 1);
    await fs.writeFile(DATABASE_PATH, JSON.stringify(users));
  }
}
