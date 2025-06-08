import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  environment = environment;
  cartService = inject(CartService);

  cartItems: Signal<CartItem[]> = this.cartService.getItems();
  totalPrice: Signal<number> = this.cartService.getTotalPrice();
  totalItems: Signal<number> = this.cartService.getTotalItems();

  removeFromCart(key: string) {
    this.cartService.removeFromCart(key);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  onBuyNow() {}
}
