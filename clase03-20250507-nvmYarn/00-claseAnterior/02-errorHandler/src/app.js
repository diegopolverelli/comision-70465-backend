import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { CustomError } from './utils/CustomError.js';
import { TIPOS_ERROR } from './utils/EErrores.js';

process.loadEnvFile("./.env")
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)



app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/ruta2',(req,res)=>{

    let {cantidad=0}=req.query
    cantidad=Number(cantidad)
    if(cantidad<0 || isNaN(cantidad)){
        CustomError.createError("Error en /ruta2", `Se ha ingresado un valor incorrecto para el argumento`, "Solo se admiten valores positivos para cantidad", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
    }    

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"ejecutando /ruta2"});
})

app.get("/ruta1", async(req, res, next)=>{
    try {
        throw new Error("Error de pruebas...")
    } catch (error) {
        // res.setHeader('Content-Type','application/json');
        // return res.status(400).json({error:`ocurrió un error`})
        next(error)
    }
})

app.use(errorHandler)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
