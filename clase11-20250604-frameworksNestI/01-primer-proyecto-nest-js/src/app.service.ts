import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello():string {
    // logica de negocio

    return 'Hello World!';
    // return false;
  }

  cambiarNombre(nombre:string){
    
    return nombre.toUpperCase()
  }
}

class Heroe{
  name:string
  id: number

  constructor(nombre, id){
    this.id=id
    this.name=nombre
  }
  
  saludo(){
    console.log(`Hola...!!! soy ${this.name}`)
  }
}

let heroe01=new Heroe("Batman", 2)

let heroe02:Heroe


heroe02={
  id:3, 
  name: "Juan",
  saludo(){

  }
}