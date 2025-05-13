import __dirname, { logger, logger2, middlewareLogger } from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));
app.use(middlewareLogger)

app.use('/', vistasRouter)
app.use('/api/heroes', heroesRouter)

app.get("/api/pruebaLogs", (req, res)=>{
    req.logger.error("prueba logger error")
    req.logger.warn("prueba logger warn")
    req.logger.info("prueba logger info")
    req.logger.http("prueba logger http")
    req.logger.debug("prueba logger debug")
    req.logger.verbose("prueba logger verbose")
    req.logger.silly("prueba logger silly")

    logger2.grave("Prueba logger level grave")
    logger2.medio("Prueba logger level medio")
    logger2.leve("Prueba logger level leve")
    logger2.info("Prueba logger level info")

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Logs generados...!!!"});
})

const server=app.listen(PORT,()=>{
    // console.log(`Server escuchando en puerto ${PORT}`);
    logger.log("info", `Server escuchando en puerto ${PORT}`)
    logger.info(`Server escuchando en puerto ${PORT}`)
    logger.warn(`Process id: ${process.pid}`)
    logger.debug(`Process id (con debug): ${process.pid}`)
});
