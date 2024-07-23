import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateUserDto, @Res() res: Response) {
    return this.usersService.update(id, updateData);
  }

  //@Delete(':id')
  //remove(@Param('id') id: string) {
  //  return this.usersService.remove(id);
  //}
}
