process.loadEnvFile("./.env")

export const config={
    PORT: process.env.PORT || 3008, 
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME, 
    SECRET: process.env.SECRET
}