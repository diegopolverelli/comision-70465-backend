import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { CarritosModule } from './carritos/carritos.module';

@Module({
  imports: [ProductosModule, CarritosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(){}
}
