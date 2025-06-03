import supertest from "supertest"
import { afterEach, describe, it } from "mocha"
import {expect} from "chai"
userModel

import { server } from "../src/app.js"

import mongoose, { isValidObjectId } from "mongoose"
import userModel from "../src/dao/models/User.js"
try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log(`Error al conectar a DB: ${error.message}`)
    process.exit()
}

// const requester=supertest("http://localhost:8080")  // con el back on line
const requester=supertest(server)   // con el back off line (pero ver de exportar server en app.js)

describe("Prueba funcional router sessions", async function(){
    this.timeout(10_000)

    this.userMock={
        first_name:"test", 
        last_name:"test", 
        email:"test@test.com", 
        password:"123"
    }

    after(async()=>{
        await userModel.deleteMany({email:"test@test.com"})
    })

    it("Si ejecuto /api/sessions/register, metodo POST, y envio un usuario correcto, lo da de alta en DB", async()=>{
        let {body} =await requester.post("/api/sessions/register").send(this.userMock)

        expect(body).to.has.property("payload")
        expect(isValidObjectId(body.payload)).to.be.true
    })

    it("Si ejecuto /api/sessions/login, metodo POST, enviando un usuario ya resgistrado, genera una cookie llamada coderCookie", async()=>{
        let {headers, body} =await requester.post("/api/sessions/login").send(this.userMock) 

        // console.log(headers)
        // console.log(body)

        let cookie= headers["set-cookie"][0]
        // console.log(cookie)
        let nombreCookie=cookie.split("=")[0]

        expect(nombreCookie).to.be.eq("coderCookie")
    } )
})