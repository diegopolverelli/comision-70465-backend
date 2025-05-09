import express from 'express';
import { config } from './config/config.js';
import { connDB } from './config/connectDB.js';
import { errorHandler } from './utils/utils.js';


import { router as sessionsRouter } from './routes/sessions.router.js';
import { router as productsRouter } from './routes/products.router.js';
import passport from 'passport';
import { inicializarPassport } from './config/passport.config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// paso 2
inicializarPassport()
app.use(passport.initialize())

app.use("/api/products", productsRouter)
app.use("/api/sessions", sessionsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

connDB()
