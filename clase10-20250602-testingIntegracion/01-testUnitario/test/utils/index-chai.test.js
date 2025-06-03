import { createHash } from "../../src/utils/index.js";
import {expect, should} from "chai"
// import Assert from "assert"

import {describe, it} from "mocha"

// const assert=Assert.strict
should()

describe("Test función hash - usando dependencia Chai", ()=>{

    // before, after...???

    it("Si mando un dato en txt plano, retorna algo diferente", async()=>{
        let pass="123"

        let resultado=await createHash(pass)

        // assert.notEqual(pass, resultado)
        expect(pass).not.to.be.equal(resultado)
        expect(pass).not.to.be.eq(resultado)
        pass.should.not.be.equal(resultado)
    })

    it("Si mando un dato en txt plano, retorna algo de mas de 15 caracteres", async()=>{
        let pass="123"

        let resultado=await createHash(pass)

        // assert.equal(resultado.length>15, true)
        expect(resultado.length).to.be.greaterThan(15)
        resultado.length.should.to.be.greaterThan(15)
    })

    it("Si mando un dato en txt plano, retorna algo hasheado con el algoritmo bcrypt", async()=>{
        let pass="123"

        let resultado=await createHash(pass)

        // assert.equal(resultado.slice(0, 4), "$2b$")
        expect(resultado.slice(0, 4)).to.be.eq("$2b$")
    })


})