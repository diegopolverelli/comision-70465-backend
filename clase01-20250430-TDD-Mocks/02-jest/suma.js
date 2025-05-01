const suma=(...sumandos)=>{    // ... son aquí el operador rest
    if(sumandos.length==0) return null
    if(!sumandos.every(n=>typeof n=="number")) return "error"
    return sumandos.reduce((acum, valor)=>acum+=valor, 0)
}

module.exports={suma}