import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT=process.env.PORT || 3009
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`Server online on port ${PORT}`, `Main App`)
}
bootstrap();
