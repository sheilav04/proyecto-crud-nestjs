import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  create(user: CreateRoleDto) {
    return this.roleRepository.save(user);
  }

  //retorna array
  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: string) {
    return this.roleRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateData: UpdateRoleDto) {
    return this.roleRepository.update({ id: id }, updateData);
  }

  //remove(id: string) {
  //  return;
  //}
}
