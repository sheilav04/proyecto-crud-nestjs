import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';

@Injectable()
export class LenguajesService {
  constructor(
    @InjectRepository(Lenguaje)
    private readonly lenguajeRepository: Repository<Lenguaje>,
  ) {}

  create(user: CreateLenguajeDto) {
    return this.lenguajeRepository.save(user);
  }

  //retorna array
  findAll() {
    return this.lenguajeRepository.find();
  }

  findOne(id: string) {
    return this.lenguajeRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateLenguajeDto) {
    return this.lenguajeRepository.update({ id: id }, updateData);
  }

  //remove(id: string) {
  //  return;
  //}
}
