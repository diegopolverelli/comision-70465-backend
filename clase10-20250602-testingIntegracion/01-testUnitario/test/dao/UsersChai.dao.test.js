import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import {before, describe, it} from "mocha"
import {expect} from "chai"

// import Assert from "assert"

try {
    const connection = await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebasclase09')
} catch (error) {
    console.log(`Error al conectar DB...`)
}

// const assert=Assert.strict

const usersDAO=new Users()

// let usuarios=await usersDAO.get()

describe("Pruebas al DAO de Users - Chai", function(){
    this.timeout(10000)


    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    // before() after()
    // boforeEach() afterEach()

    it("El dao, con su método get, debe retornar un array de users", async()=>{
        let resultado=await usersDAO.get()

        // assert.equal(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.true
        expect(Array.isArray(resultado)).to.be.eq(true)
        if(Array.isArray(resultado) && resultado.length>0){
            // assert.ok(resultado[0]._id)
            expect(resultado[0]._id).to.exist  
            expect(resultado[0]._id).to.be.ok  
            expect(resultado[0]).to.has.property("_id")
            
            // assert.ok(resultado[0].email)
            expect(resultado[0]).to.has.property("email")
            // assert.ok(resultado[0].first_name)
            expect(resultado[0]).to.has.property("first_name")
        }
    })

    it("El dao, con su método save, graba en DB, el usuario que le enviemos como argumento", async()=>{
        const userMock={
            first_name:"test", 
            last_name:"test", 
            email:"test@test.com",
            password:"123"
        }
        let consultaDB
        // pregunto si test@test.com ya existía en DB
        consultaDB=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // assert.equal(consultaDB, null)
        expect(consultaDB).to.be.null
        expect(consultaDB).to.be.eq(null)

        // lo genero con el DAO
        let resultado=await usersDAO.save(userMock)

        // afirmo:
        // assert.ok(resultado._id)
        expect(resultado._id).to.be.ok
        // assert.equal(isValidObjectId(resultado._id), true)
        expect(isValidObjectId(resultado._id)).to.be.true
        // assert.equal(resultado.email, userMock.email)
        expect(resultado).to.has.property("email").and.to.be.eq(userMock.email)
        // assert.equal(resultado.first_name, userMock.first_name)
        expect(resultado).to.has.property("first_name").and.to.be.eq(userMock.first_name)

        // valido directamente contra DB
        consultaDB=await mongoose.connection.collection("users").findOne({email:userMock.email})
        // assert.ok(consultaDB._id)
        expect(consultaDB._id).to.be.ok
        // assert.equal(consultaDB.email, userMock.email)
        expect(consultaDB.email).to.be.ok
        expect(consultaDB.email).to.be.eq(userMock.email)

    })


})