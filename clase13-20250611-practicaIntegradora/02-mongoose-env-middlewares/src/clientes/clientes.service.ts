import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Model } from 'mongoose';
import { Cliente } from './schema/clientes.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente.name) private clientesModelo: Model<Cliente>){}


  async create(createClienteDto: CreateClienteDto) {

    try {
      // console.log(`Prueba...`)
      let nuevoCliente=await this.clientesModelo.create(createClienteDto)
      return nuevoCliente
    } catch (error) {
      throw new BadRequestException(`Error: ${error.message}`)
    }

    // return 'This action adds a new cliente';
  }

  findAll() {
    return this.clientesModelo.find().lean()
    // return `This action returns all clientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
