import fs from "fs"
export const errorHandler=(error, req, res, next)=>{
    console.log(`Ocurrió un error: ${error.message}`)
    let log="./src/logs/error.log"
    if(fs.existsSync(log)){
        fs.appendFileSync(log, "\n"+JSON.stringify({name: error.name, error:error.message, detalle:error.stack}))
    }else{
        fs.writeFileSync(log, JSON.stringify({name: error.name, error:error.message, detalle:error.stack}))
    }

    if(error.custom){
        res.setHeader('Content-Type','application/json');
        return res.status(error.code).json({error:`Error inesperado en el servidor`, name:error.name})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor`})
    }
}