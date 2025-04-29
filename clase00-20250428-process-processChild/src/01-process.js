import fs from "fs"
console.log("pid: process id", process.pid)
console.log("platform", process.platform)
console.log("cwd", process.cwd())
// console.log('prueba1');
// console.log('prueba2');
// console.log('prueba3');

// res.setHeader('Content-Type','application/json');
// return res.status(400).json({error:`name is required`})

// res.setHeader('Content-Type','application/json');
// return res.status(200).json({payload:"OK"});

console.log(process.env.PRUEBA_PORT)
console.log("Argumentos recibidos por consola:", process.argv)
