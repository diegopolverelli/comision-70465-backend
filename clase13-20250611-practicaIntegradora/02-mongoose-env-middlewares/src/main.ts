import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
// import cookieParser from 'cookie-parser';
import * as cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const conn=async()=>{
  await mongoose.connect(process.env.MONGO_URL!)
  const modeloHeroes=mongoose.model(
    "heroes", 
    new mongoose.Schema(
      {
        name: String, 
        alias: String
      }, 
      {
        timestamps:true
      }
    )
  )

  let heroes=await modeloHeroes.find()
  console.log(heroes)
}
// conn()

async function bootstrap() {
  const PORT=process.env.PORT || 3009
  const app = await NestFactory.create(AppModule, {cors:true});
  // app.enableCors()
  app.use(cookieParser());
  await app.listen(PORT);
  Logger.log(`Server online on port ${PORT}`, `Main App`)
}
bootstrap();
