import { Injectable } from '@nestjs/common';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { ProductosService } from '../productos/productos.service';

@Injectable()
export class CarritosService {

  carritos:any
  constructor(private readonly productosService: ProductosService){
    this.carritos=[
      {id:1, products:[]},
      {id:7, products:[]},
      {id:24, products:[]},
    ]
  }

  create(createCarritoDto: CreateCarritoDto) {
    return 'This action adds a new carrito';
  }

  findAll() {
    return `This action returns all carritos`;
  }

  datos() {
    return {
      carritos: this.carritos, 
      productos: this.productosService.findAll(), 
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} carrito`;
  }

  update(id: number, updateCarritoDto: UpdateCarritoDto) {
    return `This action updates a #${id} carrito`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrito`;
  }
}
