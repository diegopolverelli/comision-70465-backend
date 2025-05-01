// export const suma=(a, b)=>{
//     if(!a || !b) return null

//     if(typeof a!="number" || typeof b!="number") return "error"

//     return a+b
    
// }

// export const suma=(...sumandos)=>{    // ... son aquí el operador rest
//     if(sumandos.length==0) return null

//     let error=false
//     for(let i=0; i<sumandos.length; i++){
//         if(typeof sumandos[i]!="number"){
//             error=true
//         }
//     }
//     if(error){
//         return "error"
//     }

//     let resultado=0
//     for(let i=0; i<sumandos.length; i++){
//         resultado+=sumandos[i]
//     }    
//     return resultado
// }


// export const suma=(...sumandos)=>{    // ... son aquí el operador rest
//     if(sumandos.length==0) return null

//     let error=false
//     let resultado=0
//     for(let i=0; i<sumandos.length; i++){
//         if(typeof sumandos[i]!="number"){
//             error=true
//         }
//         resultado+=sumandos[i]
//     }
//     if(error){
//         return "error"
//     }

//     return resultado
// }


export const suma=(...sumandos)=>{    // ... son aquí el operador rest
    if(sumandos.length==0) return null
    if(!sumandos.every(n=>typeof n=="number")) return "error"
    return sumandos.reduce((acum, valor)=>acum+=valor, 0)
}