import type { PersonajeSW } from "../interfaces/PersonajesSW"
import type { Pokemon } from "../interfaces/Pokemon"

export const genericos=`Genericos`

const suma=(a: number, b:number):string=>{
    return `${a+b}`
}

console.log(suma(1, 2))


const consultaAPI=async<T>(url:string):Promise<T>=>{
    let rta=await fetch(url)
    let data:T=await rta.json()
    return data
}

let personaje01=await consultaAPI<PersonajeSW>("https://swapi.info/api/people/4")
let personaje02=await consultaAPI<PersonajeSW>("https://swapi.info/api/people/1")
let personaje03=await consultaAPI<Pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu")

console.log(personaje01.name)
console.log(personaje02.name, personaje02.hair_color)

console.log(personaje01)

console.log(personaje03.name, personaje03.abilities)

const imprimir=<T, S>(a:T, b:S):S=>{

    // hace algo

    return b
}

imprimir<number, boolean>(1, false)
imprimir<string, number[]>("Juan", [1,2,3])
imprimir<number, boolean>(1, false)