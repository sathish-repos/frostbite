import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { environment } from '../../../environments/environment';
import { Product } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  imports: [NgOptimizedImage],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  products: Product[] = [];
  environment = environment;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.productsService.getProducts(
      (success) => {
        this.products = success.products;
      },
      (error) => {
        console.log('something went wrong! ', error);
      }
    );
  }

  addToCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
