import supertest from "supertest"
import { afterEach, describe, it } from "mocha"
import {expect} from "chai"
import fs from "fs"

import { server } from "../src/app.js"

import mongoose, { isValidObjectId } from "mongoose"
try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')
} catch (error) {
    console.log(`Error al conectar a DB: ${error.message}`)
    process.exit()
}

// const requester=supertest("http://localhost:8080")  // con el back on line
const requester=supertest(server)   // con el back off line (pero ver de exportar server en app.js)

describe("Test router de mascotas ", async function(){
    this.timeout(10_000)

    afterEach(async()=>{
        await mongoose.connection.collection("Pets").deleteMany({specie:"test20250602"})
    })

    it("Si ejecuto la ruta /api/pets, retorna un objeto con una propiedad payload que es un array de mascotas", async()=>{

        // let resultado=await requester.get("/api/pets")
        let {body}=await requester.get("/api/pets")
        // console.log(resultado)

        expect(body).to.has.property("payload")
        expect(Array.isArray(body.payload)).to.be.true
        if(Array.isArray(body.payload) && body.payload.length>0){
            expect(body.payload[0]).to.has.property("_id")
            expect(isValidObjectId(body.payload[0]._id)).to.be.eq(true)
        }

    })

    it("Si ejecuto la ruta /api/pets, retorna un objeto con una propiedad status con valor success", async()=>{

        // let resultado=await requester.get("/api/pets")
        let { body}=await requester.get("/api/pets")
        // console.log(resultado)

        expect(body).to.has.property("status").and.to.be.eq("success")

    })

    it("Si ejecuto la ruta /api/pets, retorna un un status code 200", async()=>{

        // let resultado=await requester.get("/api/pets")
        let {status}=await requester.get("/api/pets")
        // console.log(resultado)

        expect(status).to.be.eq(200)

    })

    it("Si envio los datos de una mascota, a la ruta /api/pets, método POST, la graba en DB", async()=>{
        let petMock={name:"Marshall", specie:"test20250602", birthDate:"2019-02-12"}

        let {body} = await requester.post("/api/pets").send(petMock)
                                    .set("Content-Type", "application/json")
                                    .set("Cookie", "prueba de cookie enviada desde el test...!!!")

        expect(body).to.has.property("payload")
        expect(body.payload).to.has.property("_id")
        expect(isValidObjectId(body.payload._id)).to.be.eq(true)
        expect(body.payload).to.has.property("name").and.to.be.eq(petMock.name)

    })

    it("Si ejecuto la ruta /api/pets/withImage enviando una imagen, la sube al server", async()=>{
        let petMock={name:"Roger", specie:"test20250602", birthDate:"2019-02-12"}

        let {body} = await requester.post("/api/pets/withImage")
                                    .field("name", petMock.name)
                                    .field("specie", petMock.specie)
                                    .field("birthDate", petMock.birthDate)
                                    .attach("image","../img-roger.jpg")

        expect(body).to.have.property("status").and.to.be.eq("success")
        expect(fs.existsSync(body.payload.image)).to.be.true
    })


})