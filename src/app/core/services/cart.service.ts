import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems$ = new BehaviorSubject<CartItem[]>(this.loadCart());

  get cart$() {
    return this.cartItems$.asObservable();
  }

  addToCart(product: Product) {
    const items = this.cartItems$.value;

    const exists = items.some((item) => item.productId === product.id);

    if (exists) {
      return;
    }

    items.push({
      productId: product.id,
      name: product.name,
      price: product.price!,
      image: product.image,
      quantity: 1,
    });

    this.updateCart(items);
  }

  removeFromCart(productId: number) {
    const items = this.cartItems$.value.filter(
      (i) => i.productId !== productId,
    );
    this.updateCart(items);
  }

  clearCart() {
    this.updateCart([]);
  }

  private updateCart(items: CartItem[]) {
    this.cartItems$.next([...items]);
    localStorage.setItem('cart', JSON.stringify(items));
  }

  private loadCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
