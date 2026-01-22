import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  orders$: Observable<Order[]>;

  constructor(
    public auth: AuthService,
    private orderService: OrderService,
  ) {
    this.orders$ = this.auth.user$.pipe(
      switchMap((user) =>
        user ? this.orderService.getOrdersByUser(user.uid) : of([]),
      ),
    );
  }
}
