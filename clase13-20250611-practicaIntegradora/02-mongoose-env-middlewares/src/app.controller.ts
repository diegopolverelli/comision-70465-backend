import { Controller, Get, Req, Res, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get("datos")
  @SetMetadata('roles', ['admin', 'user'])
  @SetMetadata('color', "rojo")
  @UseGuards(AuthGuard)
  datos(): string {
    return "Datos confidenciales...!!!";
  }
  
  @Get("getcookies")
  @SetMetadata('roles', ['user', 'manager'])
  getCookies(@Req() req:Request){
    console.log(req.cookies)

    console.log(req.query)

    return {
      cookies: req.cookies
    }
  }


  @Get("setcookie")
  @SetMetadata('roles', ['admin', 'manager'])
  setCookie( @Req() req:Request, @Res({passthrough:true}) res:Response){


    res.cookie("pruebaDeCookies", "Hola...!!!")

    return "Cookie generada"
    // res.send("Cookie generada...!!!")
  }
}
