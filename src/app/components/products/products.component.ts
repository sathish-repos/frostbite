import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { environment } from '../../../environments/environment';
import { Product } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

declare var bootstrap: any;

@Component({
  selector: 'app-products',
  imports: [NgOptimizedImage],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  environment = environment;

  @ViewChild('toastEl', { static: true }) toastElement!: ElementRef;
  toastMessage: string = 'added to cart successfully!';
  products: Product[] = [];

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
    this.showToast();
  }

  showToast() {
    const toast = new bootstrap.Toast(this.toastElement.nativeElement);
    toast.show();
  }
}
