process.on("exit", code=>{
    console.log(`El proceso sale con codigo ${code}`)
})

process.on("uncaughtException", error=>{
    console.log(`Error: ${error.message}`)
})

let contador=1
let i01=setInterval(() => {
    console.log(`Ejecutando proceso ${contador}`)
    contador ++

    // if(contador==2){
    //     console.log(`Situación inesperada`)
    //     process.exit(-5)
    // }


    if(contador==5){
        throw new Error("Error de pruebas... ")
    }

    if(contador>10){
        clearInterval(i01)
    }
}, 500);