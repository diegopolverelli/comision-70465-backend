import { suma } from "./suma.js";
import util from "util"
import colors from "colors"

let pruebas=0
let pruebasOK=0
let esperado
let resultado

console.log(util.styleText(['underline', 'italic', 'green'], 'Comision 70465 - Clase 01'))

console.log('\x1b[34m\x1b[1mEjemplo TDD\x1b[0m')

console.time("\n\nTiempo test:")

pruebas++
console.log(`Prueba ${pruebas}: si recibo como argumento 2 números, la fn debe retornar la suma de ambos`)
resultado=suma(10, 4)
esperado=14
if(resultado==esperado){
    pruebasOK++
    console.log(`Prueba ${pruebas} - pass`.green)
}else{
    console.log(`Prueba ${pruebas} - fail`.red)
}

pruebas++
console.log(`Prueba ${pruebas}: si recibo como argumento 1 dato de tipo distinto a number, la fn debe retornar "error"`)
resultado=suma(10, "Juan")
esperado="error"
if(resultado==esperado){
    pruebasOK++
    console.log(`Prueba ${pruebas} - pass`.green)
}else{
    console.log(`Prueba ${pruebas} - fail`.red)
}

pruebas++
console.log(`Prueba ${pruebas}: si no recibo argumentos, la fn debe retornar null`)
resultado=suma()
esperado=null
if(resultado===esperado){
    pruebasOK++
    console.log(`Prueba ${pruebas} - pass`.green)
}else{
    console.log(`Prueba ${pruebas} - fail`.red)
}

pruebas++
console.log(`Prueba ${pruebas}: si recibo como argumento n números, la fn debe retornar la suma de todos los números ingresados`)
resultado=suma(1, 2, 3, 4, 5)
esperado=15
if(resultado==esperado){
    pruebasOK++
    console.log(`Prueba ${pruebas} - pass`.green)
}else{
    console.log(`Prueba ${pruebas} - fail`.red)
}

console.timeEnd("\n\nTiempo test:")
console.log(`Pruebas realizadas: ${pruebas} -`,`pruebas superadas: ${pruebasOK}`.green,` - `,` pruebas fallidas: ${pruebas-pruebasOK}`.red)
