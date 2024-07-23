import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  create(user: CreateUserDto) {
    return this.userRepository.save(user);
  }

  //retorna array
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateUserDto) {
    return this.userRepository.update({ id: id }, updateData);
  }

  //remove(id: string) {
  //  return;
  //}
}
