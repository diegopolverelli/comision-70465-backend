const {suma} = require("./suma.js")

describe("Pruebas funcion suma", ()=>{
    it("Si la fn recibe 2 numeros retorna la suma de ambos", ()=>{
        expect(suma(10, 4)).toBe(14)
        expect(suma(5, 4)).toBe(9)
        expect(suma(10, -4)).toBe(6)
        expect(suma(10, 10)).toBe(20)
    })

    it("Si no recibo argumentos, retorna null", ()=>{
        expect(suma()).toBeNull()
    })

    it("Si recibo algún argumento no numérico, retorna 'error'", ()=>{
        expect(suma("juan", "pinchame")).toBe("error")
        expect(suma(100, false)).toBe("error")
        expect(suma(100, {name:"Pedro"})).toBe("error")
    })

    it("Si recibo n numeros, retorna la suma de todos", ()=>{
        expect(suma(1, 2, 3, 4, 5)).toBe(15)
        expect(suma(1, 2, 3, 4, 5, 10)).toBe(25)
    })


})