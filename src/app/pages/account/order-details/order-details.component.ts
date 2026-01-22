import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { Observable, switchMap } from 'rxjs';
import { Order } from '../../../core/models/order.model';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  order$!: Observable<Order>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
  ) {
    this.order$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (!id) {
          this.router.navigate(['/account']);
          throw new Error('Pedido inválido');
        }
        return this.orderService.getOrderById(id);
      }),
    );
  }
}
