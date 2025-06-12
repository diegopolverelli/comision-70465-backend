import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cliente, ClienteSchema } from './schema/clientes.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Cliente.name, schema: ClienteSchema}
  ])],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
