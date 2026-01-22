import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { combineLatest, map, Observable, take } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { CartItem } from '../../core/models/cart-item.model';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  cart$!: Observable<CartItem[]>;
  total$!: Observable<number>;
  user$!: Observable<User | null>;

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private orderService: OrderService,
    private router: Router,
  ) {
    this.cart$ = this.cartService.cart$;
    this.user$ = this.auth.user$;

    this.total$ = this.cart$.pipe(
      map((items) =>
        items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      ),
    );
  }

  confirmOrder() {
    combineLatest([this.user$, this.cart$, this.total$])
      .pipe(take(1))
      .subscribe(([user, items, total]) => {
        if (!user) return;

        this.orderService.createOrder({
          userId: user.uid,
          items,
          total,
        });

        this.cartService.clearCart();
        this.router.navigate(['/success']);
      });
  }
}
