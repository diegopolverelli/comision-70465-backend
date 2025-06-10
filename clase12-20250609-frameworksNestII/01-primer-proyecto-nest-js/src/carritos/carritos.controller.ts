import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarritosService } from './carritos.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';

@Controller('api/carritos')
export class CarritosController {
  constructor(private readonly carritosService: CarritosService) {}

  @Post()
  create(@Body() createCarritoDto: CreateCarritoDto) {
    return this.carritosService.create(createCarritoDto);
  }

  @Get()
  findAll() {
    return this.carritosService.findAll();
  }

  @Get("datos")
  carritosProductos() {
    return this.carritosService.datos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarritoDto: UpdateCarritoDto) {
    return this.carritosService.update(+id, updateCarritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritosService.remove(+id);
  }
}
