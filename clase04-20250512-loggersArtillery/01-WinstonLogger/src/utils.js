import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const logger=winston.createLogger(
    {
        transports:[
            new winston.transports.Console(
                {
                    level:"debug",
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.timestamp(),
                        winston.format.simple()
                    )
                }
            ),
            new winston.transports.File(
                {
                    level:"warn",
                    filename: "./src/logs/error.log",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            )
        ]
    }
)

export const middlewareLogger=(req, res, next)=>{
    req.logger=logger
    next()
}

export const logger2=winston.createLogger(
    {
        levels: {"grave":0, "medio":1, "leve":2, "info":3},
        transports: [
            new winston.transports.Console({
                level:"info",
                format: winston.format.combine(
                    winston.format.colorize({
                        colors:{"grave": "red", "medio":"yellow", "leve":"green", "info":"blue" }
                    }),
                    winston.format.timestamp(),
                    winston.format.simple()
                )
            })
        ]
    }
)