import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.interface';

const PRODUCTS_LIST: Product[] = [
  {
    name: "Product 1",
    price: 5,
    amount: 2,
    specification: {
      stars: 3,
      votes: 100
    }
  },
  {
    name: "Product 2",
    price: 8,
    amount: 5,
    specification: {
      stars: 4,
      votes: 1000
    }
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _httpClient = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return of(PRODUCTS_LIST);
  }
}
