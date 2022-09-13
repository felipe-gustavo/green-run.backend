import { NestFactory } from '@nestjs/core';

import { AppModule } from '@shared/infra/rest/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
