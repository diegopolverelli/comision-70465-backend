import { BadRequestException, Body, Controller, Get, HttpException, Param, Post, Query, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(@Query("nombre") nombre: string): string {
    console.log(nombre)
    return this.appService.getHello();
  }

  @Get("alumno/:id")
  alumno(@Param("id") legajoAlumno:string){
    console.log(legajoAlumno)

    return `Datos alumno ${legajoAlumno}`
  }

  @Get("suma/:a/:b")
  suma(@Param("a") a:number, @Param("b") b:number){

    a=Number(a)
    b=Number(b)
    if(isNaN(a) || isNaN(b)) throw new HttpException("Ingrese parametros numéricos", HttpStatus.BAD_REQUEST)

    return a+b
  }

  @Get("suma2/:a/:b")
  suma2(@Param("a", ParseIntPipe) a:number, @Param("b", ParseIntPipe) b:number){

    // a=Number(a)
    // b=Number(b)
    // if(isNaN(a) || isNaN(b)) throw new HttpException("Ingrese parametros numéricos", HttpStatus.BAD_REQUEST)

    return a+b
  }


  @Get("suma3")
  suma3(@Query("a", new ParseIntPipe({optional:true})) a:number=0, @Query("b", new ParseIntPipe({optional:true})) b:number=0){

    // a=Number(a)
    // b=Number(b)
    // if(isNaN(a) || isNaN(b)) throw new HttpException("Ingrese parametros numéricos", HttpStatus.BAD_REQUEST)

    return a+b
  }

  @Post("nombre")
  nombre(@Body() body){

    if(!body.nombre) throw new BadRequestException("nombre es requerido")

    console.log(body)
    return this.appService.cambiarNombre(body.nombre)
  }
}
