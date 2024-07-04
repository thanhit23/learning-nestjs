import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  Type,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidatePipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    const errorsData = (errors || []).map((error) => ({
      field: error.property,
      message: Object.values(error.constraints)[0],
    }));

    if (errorsData.length > 0) {
      throw new BadRequestException(errorsData);
    }

    return value;
  }

  public toValidate(metatype: Type<any>): boolean {
    const types: Type<any>[] = [String, Number, Boolean, Object, Array];
    return !types.includes(metatype);
  }
}
