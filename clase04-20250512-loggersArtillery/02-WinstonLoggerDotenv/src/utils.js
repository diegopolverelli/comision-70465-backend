import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"

process.loadEnvFile("./.env")

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const transporteConsola=new winston.transports.Console({
    level:"debug",
    format: winston.format.combine(
        winston.format.colorize(), 
        winston.format.timestamp(), 
        winston.format.simple()
    )
})

const transporteArchivo=new winston.transports.File({
    level:"warn",
    filename: "./src/logs/error.log", 
    format: winston.format.combine(
        winston.format.timestamp(), 
        winston.format.json()
    )
})

export const logger=winston.createLogger(
    {
        transports:[
            // transporteConsola,
            transporteArchivo
        ]
    }
)


if(process.env.MODE=="dev"){
    logger.add(transporteConsola)
}