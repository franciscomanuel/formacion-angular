import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product.interface';

@Pipe({
  name: 'stars',
  standalone: false
})
export class StarsPipe implements PipeTransform {

  transform(value: Product, ...args: unknown[]): number {
    return value.specification.stars;
  }

}
