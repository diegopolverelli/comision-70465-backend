import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("nombre")
  nombre(@Body() body){

    if(!body.nombre) throw new BadRequestException("nombre es requerido")

    console.log(body)
    return this.appService.cambiarNombre(body.nombre)
  }
}
