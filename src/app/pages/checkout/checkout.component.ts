import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { CartItem } from '../../core/models/cart-item.model';
import { User } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

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

  isLoading = false;

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private http: HttpClient,
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
    if (this.isLoading) return;

    this.isLoading = true;

    this.auth.user$.pipe(take(1)).subscribe((user) => {
      if (!user) {
        this.isLoading = false;
        return;
      }

      this.cart$.pipe(take(1)).subscribe((items) => {
        if (!items.length) {
          this.isLoading = false;
          return;
        }

        const payload = {
          userId: user.uid,
          items: items,
        };

        this.http
          .post<{ url: string }>('http://localhost:3000/create-checkout-session', payload)
          .subscribe({
            next: (response) => {
              // Redireciona
              window.location.href = response.url;
            },
            error: (err) => {
              console.error('Erro ao iniciar pagamento', err);
              this.isLoading = false;
              alert('Ocorreu um erro ao conectar com o pagamento via Stripe.');
            },
          });
      });
    });
  }
}
