require("colors")

const saludo1=(saludo, nombre)=>{
    console.log(`${saludo} ${nombre}`.rainbow.bold)
}

const saludo2=(saludo, nombre)=>{
    console.log(`${saludo} ${nombre}`.zebra.bold)
}

module.exports={saludo1, saludo2}

// saludo1("Hola", "Juan Manuel")