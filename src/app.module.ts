import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModules } from './modules/products/product.module';

@Module({
  imports: [ProductModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
