import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ProductsModule, PrismaModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client', 'build'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
