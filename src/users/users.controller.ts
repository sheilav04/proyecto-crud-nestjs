import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.usersService.findOne(name);
  }

  @Patch(':name')
  async update(@Param('name') name: string, @Body() user: UpdateUserDto, @Res() res: Response) {
    await this.usersService.update(name, user);
    res.sendStatus(204);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.usersService.remove(name);
  }
}
