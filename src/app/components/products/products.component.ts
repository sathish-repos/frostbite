import { Component, inject, OnInit } from '@angular/core';

import { Product } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productsService = inject(ProductsService);

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts(
      (success) => {
        this.products = success;
      },
      (error) => {
        console.log('something went wrong! ', error);
      }
    );
  }
}
