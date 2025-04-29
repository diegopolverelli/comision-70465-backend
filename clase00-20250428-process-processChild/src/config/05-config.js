import dotenv from "dotenv"

const mode="PROD"
dotenv.config({path:mode=="DEV"?"./src/.env.dev":"./src/.env.prod"})

export const config={
    PORT: process.env.PORT, 
    SECRET: process.env.SECRET, 
    MONGO_URL: process.env.MONGO_URL, 
    DB_NAME: process.env.DB_NAME
}