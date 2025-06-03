import { createHash } from "../../src/utils/index.js";

import Assert from "assert"

import {describe, it} from "mocha"

const assert=Assert.strict

describe("Test función hash", ()=>{

    // before, after...???

    it("Si mando un dato en txt plano, retorna algo diferente", async()=>{
        let pass="123"

        let resultado=await createHash(pass)

        assert.notEqual(pass, resultado)
    })

    it("Si mando un dato en txt plano, retorna algo de mas de 15 caracteres", async()=>{
        let pass="123"

        let resultado=await createHash(pass)

        assert.equal(resultado.length>15, true)
    })

    it("Si mando un dato en txt plano, retorna algo hasheado con el algoritmo bcrypt", async()=>{
        let pass="123"

        let resultado=await createHash(pass)

        assert.equal(resultado.slice(0, 4), "$2b$")
    })


})