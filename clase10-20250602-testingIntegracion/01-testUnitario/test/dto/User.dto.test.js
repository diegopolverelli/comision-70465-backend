import UserDTO from "../../src/dto/User.dto.js"
import {expect} from "chai"
import {describe, it} from "mocha"

describe("Pruebas DTO", ()=>{
    // after, before, afterEach, beforeEach
    
    describe("Pruebas DTO Users", ()=>{
        // after, before, afterEach, beforeEach
        
        it("Si envío un usuario con first_name y last_name, retorna un usuario con name (concatenación de ambos)", ()=>{
            let userMock={
                first_name:"test", last_name:"test", email:"test@test.com", password: "123"
            }

            let resultado=UserDTO.getUserTokenFrom(userMock)

            expect(resultado).to.has.property("name").and.to.be.eq(`${userMock.first_name} ${userMock.last_name}`)
        })

        it("Si envío un usuario con first_name y last_name, retorna un usuario sin last_name", ()=>{
            let userMock={
                first_name:"test", last_name:"test", email:"test@test.com", password: "123"
            }

            let resultado=UserDTO.getUserTokenFrom(userMock)

            expect(resultado).not.to.has.property("last_name")
        })

        it("Si envío un usuario con first_name y last_name, retorna un usuario sin fist_name", ()=>{
            let userMock={
                first_name:"test", last_name:"test", email:"test@test.com", password: "123"
            }

            let resultado=UserDTO.getUserTokenFrom(userMock)

            expect(resultado).not.to.has.property("first_name")
        })
        
    })
    
    describe("Pruebas DTO Pets", ()=>{
        // after, before, afterEach, beforeEach
        it("Prueba 1 DTO pets", ()=>{
            expect(1).to.be.eq(1)
        })
        
        it("Prueba 2 DTO pets", ()=>{
            expect(1).to.be.eq(1)
        })

        it("Prueba 3 DTO pets", ()=>{
            expect(1).to.be.eq(1)
        })
    })
})