import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import {before, describe, it} from "mocha"

import Assert from "assert"

try {
    const connection = await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebasclase09')
} catch (error) {
    console.log(`Error al conectar DB...`)
}

const assert=Assert.strict

const usersDAO=new Users()

// let usuarios=await usersDAO.get()

describe("Pruebas al DAO de Users", function(){
    this.timeout(10000)


    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    // before() after()
    // boforeEach() afterEach()

    it("El dao, con su método get, debe retornar un array de users", async()=>{
        let resultado=await usersDAO.get()

        assert.equal(Array.isArray(resultado), true)
        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0]._id)
            assert.ok(resultado[0].email)
            assert.ok(resultado[0].first_name)
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
        assert.equal(consultaDB, null)

        // lo genero con el DAO
        let resultado=await usersDAO.save(userMock)

        // afirmo
        assert.ok(resultado._id)
        assert.equal(isValidObjectId(resultado._id), true)
        assert.equal(resultado.email, userMock.email)
        assert.equal(resultado.first_name, userMock.first_name)

        // valido directamente contra DB
        consultaDB=await mongoose.connection.collection("users").findOne({email:userMock.email})
        assert.ok(consultaDB._id)
        assert.equal(consultaDB.email, userMock.email)

    })


})