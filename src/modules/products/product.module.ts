import { Module } from '@nestjs/common';
import { ControllerProduct } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ControllerProduct],
  providers: [ProductService],
})
export class ProductModules { }
