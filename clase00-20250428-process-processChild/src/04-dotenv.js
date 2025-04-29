// process.loadEnvFile("./src/.env")
// 
// import dotenv from "dotenv"
// dotenv.config({
//     path: "./src/.env"
// })
// console.log(`Puerto ${process.env.PORT}`)

import express from 'express';
import { config } from './config/04-config.js';
const PORT=config.PORT;

console.log(`Conectado a db: ${config.DB_NAME}`)

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
