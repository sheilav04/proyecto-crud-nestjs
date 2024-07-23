import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
import { PaisesService } from './paises.service';

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  create(@Body() createPaiseDto: CreatePaiseDto) {
    return this.paisesService.create(createPaiseDto);
  }

  @Get()
  findAll() {
    return this.paisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaiseDto: UpdatePaiseDto) {
    return this.paisesService.update(id, updatePaiseDto);
  }
}
