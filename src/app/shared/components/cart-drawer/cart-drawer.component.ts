import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Imports
import { CartService } from '../../../core/services/cart.service';
import { CartDrawerService } from '../../../core/services/cart-drawer.service';
import { AuthService } from '../../../core/services/auth.service';
import { CartItem } from '../../../core/models/cart-item.model';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.scss'],
})
export class CartDrawerComponent {
  isOpen$: Observable<boolean>;
  items$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;

  constructor(
    private cartService: CartService,
    private drawer: CartDrawerService,
    public auth: AuthService,
    private router: Router,
  ) {
    this.isOpen$ = this.drawer.isOpen$;
    this.items$ = this.cartService.cart$;

    this.cartTotal$ = this.items$.pipe(
      map((items) =>
        items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      ),
    );
  }

  close() {
    this.drawer.close();
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  goToLogin() {
    this.drawer.close();
    this.router.navigate(['/login']);
  }

  checkout() {
    this.drawer.close();

    this.cartService.cart$.pipe(take(1)).subscribe((items) => {
      if (!items.length) return;
      this.router.navigate(['/checkout']);
    });
  }
}
