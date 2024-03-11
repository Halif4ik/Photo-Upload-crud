import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as bodyParser from 'body-parser';

!async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const config = new DocumentBuilder()
      .setTitle('Users photo AWS test application')
      .setDescription('Documentation REST API')
      .setVersion('1.0.0')
      .addTag('Aur-a Doc')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${process.env.SWAGGER_HOST}`, app, document);

  // Define the CORS options
  const corsOptions = {
    origin: [
      process.env.CORS_HOST_HTTP,
    ],
    methods: 'POST,GET,PATCH,DELETE',
    credentials: true, // Enable cookies and authentication headers
  };
  app.use(bodyParser.json({ limit: '8mb' }));
  app.use(bodyParser.urlencoded({ limit: '8mb', extended: true }));

  app.enableCors(corsOptions);
  app.setGlobalPrefix('api')

  await app.listen(+process.env.PORT);
}();
