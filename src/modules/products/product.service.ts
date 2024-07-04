import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
  getProduct(): string {
    return 'get product';
  }

  getDetail(): string {
    return "get detail";
  }

  createProduct(payload: ProductDTO): string {
    console.log('payload', payload);

    return 'create product';
  }

  deleteProduct(): string {
    return 'delete product';
  }

  updateProduct(): string {
    return 'update product';
  }
}
