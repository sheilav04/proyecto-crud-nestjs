import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { LenguajesService } from './lenguajes.service';

@Controller('lenguajes')
export class LenguajesController {
  constructor(private readonly lenguajesService: LenguajesService) {}

  @Post()
  create(@Body() createLenguajeDto: CreateLenguajeDto) {
    return this.lenguajesService.create(createLenguajeDto);
  }

  @Get()
  findAll() {
    return this.lenguajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguajesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLenguajeDto: UpdateLenguajeDto) {
    return this.lenguajesService.update(id, updateLenguajeDto);
  }
}
