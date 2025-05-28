import { inject, Injectable } from '@angular/core';
import { Product, Review } from '../models/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl: string = 'bj/products.json';
  private reviewUrl: string = 'bj/reviews.json';

  private http = inject(HttpClient);

  public getProducts(
    success: (products: Product[]) => void,
    error: (err: any) => void
  ): void {
    this.http.get<Product[]>(this.productsUrl).subscribe({
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
