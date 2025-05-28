import { inject, Injectable } from '@angular/core';
import { Product, Products, Review } from '../models/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl: string = 'https://frostbite-assets.vercel.app/api/products';
  private reviewUrl: string = 'https://frostbite-assets.vercel.app/api/reviews/0_hd';

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
