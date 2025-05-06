import {fakerES_MX as fa} from "@faker-js/faker"

for(let i=0; i<fa.number.int({min:5, max:50});i++){
    console.log("perro:",fa.animal.dog())
    console.log("pajaro:", fa.animal.bird())
    console.log("producto:",fa.commerce.product())
    let nombre=fa.person.firstName("male")
    let apellido=fa.person.lastName()
    console.log("nombre y apellido", nombre, apellido)
    console.log("email:", fa.internet.email({ firstName: nombre, lastName: apellido }))
    let documento=fa.string.numeric({length:8})
    console.log("DNI:", documento)
    documento=fa.number.int({ min: 10_000_000, max: 48_000_000 })
    console.log("DNI:", documento)
    console.log("ID Mongo:", fa.database.mongodbObjectId())
}