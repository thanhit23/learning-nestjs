import { MinLength, IsNumber, IsNotEmpty } from 'class-validator';

export class ProductDTO {
  categoryId?: string;

  @IsNotEmpty({ message: 'Please enter name' })
  @MinLength(5, { message: 'Please enter name must be than 5 character' })
  name?: string;

  @IsNotEmpty({ message: 'Please enter price' })
  @IsNumber({}, { message: 'Please enter is a number' })
  price?: number;
}
