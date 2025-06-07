import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product, Products, Review } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl: string = environment.apiUrl + '/api/products';
  private reviewUrl: string = environment.apiUrl + '/api/reviews/0_hd';

  private http = inject(HttpClient);

  public getProducts(
    success: (products: Products) => void,
    error: (err: any) => void
  ): void {
    this.http.get<Products>(this.productsUrl).subscribe({
      next: success,
      error: error,
    });
  }

  public getReviews(
    success: (products: Review[]) => void,
    error: (err: any) => void
  ): void {
    this.http.get<Review[]>(this.reviewUrl).subscribe({
      next: success,
      error: error,
    });
  }
}
