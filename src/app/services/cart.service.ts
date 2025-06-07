import { computed, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../models/products.model';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cart_items';
  private items = signal<CartItem[]>([]);

  constructor() {
    this.loadCart();
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.items()));
  }

  private loadCart() {
    const data = localStorage.getItem(this.cartKey);
    this.items.set(data ? JSON.parse(data) : []);
  }

  getItems(): Signal<CartItem[]> {
    return this.items;
  }

  addToCart(item: Product) {
    const found = this.items().find((i) => i.key === item.key);
    if (found) {
      found.quantity += 1;
    } else {
      this.items().push({ ...item, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(itemId: string | number) {
    this.items.update((items) => items.filter((i) => i.key !== itemId));
    this.saveCart();
  }

  updateQuantity(itemId: string | number, quantity: number) {
    const item = this.items().find((i) => i.key === itemId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(itemId);
      } else {
        this.saveCart();
      }
    }
  }

  clearCart() {
    this.items.set([]);
    this.saveCart();
  }

  getTotalPrice(): Signal<number> {
    return computed(() =>
      this.items().reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    );
  }

  getTotalItems(): Signal<number> {
    return computed(() =>
      this.items().reduce((count, item) => count + item.quantity, 0)
    );
  }
}
