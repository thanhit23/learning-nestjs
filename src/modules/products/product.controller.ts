import {
  Controller,
  Get,
  Delete,
  Put,
  Post,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponsiveData } from 'src/global/globalClass';
import { HTTPMessage, HTTPStatus } from 'src/global/globalEnum';
import { ProductDTO } from 'src/dto/product.dto';

@Controller('products')
export class ControllerProduct {
  constructor(private readonly productService: ProductService) { }

  @Get()
  getProduct(): ResponsiveData<string> {
    try {
      return new ResponsiveData<string>(
        this.productService.getProduct(),
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponsiveData<string>(
        null,
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    }
  }

  @Get('/:id')
  getDetail(): ResponsiveData<string> {
    try {
      return new ResponsiveData<string>(
        this.productService.getDetail(),
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponsiveData<string>(
        null,
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    }
  }

  @Post()
  createProduct(
    @Body(new ValidationPipe()) payload: ProductDTO,
  ): ResponsiveData<string> {
    try {
      return new ResponsiveData<string>(
        this.productService.createProduct(payload),
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponsiveData<string>(
        null,
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    }
  }

  @Delete('/:id')
  deleteProduct(): ResponsiveData<string> {
    try {
      return new ResponsiveData<string>(
        this.productService.deleteProduct(),
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponsiveData<string>(
        null,
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    }
  }

  @Put('/:id')
  updateProduct(@Body() body, @Param('id') id): ResponsiveData<string> {
    try {
      console.log(body);
      console.log(id);
      return new ResponsiveData<string>(
        this.productService.updateProduct(),
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponsiveData<string>(
        null,
        HTTPStatus.SUCCESS,
        HTTPMessage.SUCCESS,
      );
    }
  }
}
