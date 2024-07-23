import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}

  create(marca: CreateMarcaDto) {
    return this.marcaRepository.save(marca);
  }

  //retorna array
  findAll() {
    return this.marcaRepository.find();
  }

  findOne(id: string) {
    return this.marcaRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateMarcaDto) {
    return this.marcaRepository.update({ id: id }, updateData);
  }

  //remove(id: string) {
  //  return;
  //}
}
