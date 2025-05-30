import express from 'express';
import { router as productsRouter } from './routes/products.router';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products", productsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/saludo',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Hola...!!!');
})

type collUsers= {
    id: number;
    nombre: string;
    email: string;
    password: string;
    rol: string;
}[]

app.get('/users',(req,res)=>{
    let usuarios:collUsers=[
        {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
        {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
        {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]

    // usuarios.push({
    //     color:"red"
    // })

    // usuarios=100

    res.setHeader('Content-Type','application/json');
    res.status(200).json({usuarios});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
