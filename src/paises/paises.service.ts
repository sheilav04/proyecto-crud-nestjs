import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
import { Paise } from './entities/paise.entity';

@Injectable()
export class PaisesService {
  constructor(
    @InjectRepository(Paise)
    private readonly paiseRepository: Repository<Paise>,
  ) {}

  create(user: CreatePaiseDto) {
    return this.paiseRepository.save(user);
  }

  //retorna array
  findAll() {
    return this.paiseRepository.find();
  }

  findOne(id: string) {
    return this.paiseRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdatePaiseDto) {
    return this.paiseRepository.update({ id: id }, updateData);
  }

  //remove(id: string) {
  //  return;
  //}
}
