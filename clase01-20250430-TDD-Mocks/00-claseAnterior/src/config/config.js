import dotenv from "dotenv"
import {Command, Option} from "commander"

const program=new Command()

program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del server").choices(["dev", "prod"]).default("prod"))

program.parse()
const {mode}=program.opts()

// const mode="PROD"
dotenv.config({path: mode=="dev"?"./src/.env.dev":"./src/.env.prod", override: true})

// process.loadEnvFile()

export const config={
    PORT: process.env.PORT, 
    SECRET: process.env.SECRET
}
