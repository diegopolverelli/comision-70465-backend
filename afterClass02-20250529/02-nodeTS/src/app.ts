import express, { Request, Response } from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req:Request,res:Response)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/saludo',(req:Request,res:Response)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Hola...!!!');
})

app.get('/saludo2',(req:Request,res:Response)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Hola 2...!!!');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
