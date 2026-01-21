import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { CartDrawerService } from '../../../core/services/cart-drawer.service';
import { CartItem } from '../../../core/models/cart-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.scss'],
})
export class CartDrawerComponent {
  items: CartItem[] = [];
  isOpen$!: Observable<boolean>; 

  constructor(
    private cartService: CartService,
    private drawer: CartDrawerService,
  ) {
    this.isOpen$ = this.drawer.isOpen$;

    this.cartService.cart$.subscribe((items) => {
      this.items = items;
    });
  }

  close() {
    this.drawer.close();
  }

  remove(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  get total() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }
}
