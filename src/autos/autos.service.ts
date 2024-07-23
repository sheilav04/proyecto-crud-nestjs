import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './entities/auto.entity';

@Injectable()
export class AutosService {
  constructor(
    @InjectRepository(Auto)
    private readonly userRepository: Repository<Auto>,
  ) {}

  create(auto: CreateAutoDto) {
    return this.userRepository.save(auto);
  }

  //retorna array
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateAutoDto) {
    return this.userRepository.update({ id: id }, updateData);
  }

  //remove(id: string) {
  //  return;
  //}
}
