let [,, ...argumentos]=process.argv   // ... son aquí el operador REST
// console.log(argumentos) 

let posPort=argumentos.findIndex(a=>a=="--port")
if(posPort==-1){
    console.log(`Complete el puerto`)
    process.exit()
}

console.log(`Server ejecutando en puerto ${argumentos[posPort+1]}`)