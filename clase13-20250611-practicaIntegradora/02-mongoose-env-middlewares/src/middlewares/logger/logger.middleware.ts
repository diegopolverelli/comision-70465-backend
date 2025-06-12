import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {

    console.log(`Middleware log: url ${req.url} | ${new Date().toLocaleDateString()}`)

    next();
  }
}


interface PersonaInterface{
  nombre: string
  saludo:()=>string
}

let persona01:PersonaInterface

persona01={
  nombre:"Raul",
  // email:"raul@test.com",
  saludo:()=>{
    return "hola...!!!"
  }
}

class Persona implements PersonaInterface{
  email:string
  nombre: string;

  constructor(email, nombre){
    this.email=email
    this.nombre=nombre
  }

  saludo(){
    return `Hola, soy ${this.nombre}`
  };

  despedida(){
    return "chau...!!!"
  }
}