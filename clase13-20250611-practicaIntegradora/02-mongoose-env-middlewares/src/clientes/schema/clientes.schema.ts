import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type clienteDocument = HydratedDocument<Cliente>;

@Schema({
    timestamps:true, 
    // strict: false,
})
export class Cliente {
  @Prop()
  nombre: string;

  @Prop({
    unique: true
  })
  cuit: number;

  @Prop({default: 0})
  limiteCtaCte?: number;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
