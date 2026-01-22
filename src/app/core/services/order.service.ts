import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private storageKey = 'orders';

  createOrder(userId: string, items: CartItem[], total: number): Order {
    const order: Order = {
      id: crypto.randomUUID(),
      userId,
      items,
      total,
      createdAt: new Date().toISOString(),
    };

    const orders = this.getAllOrders();
    orders.push(order);

    localStorage.setItem(this.storageKey, JSON.stringify(orders));

    return order;
  }

  getAllOrders(): Order[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getOrdersByUser(userId: string): Order[] {
    return this.getAllOrders().filter((order) => order.userId === userId);
  }
}
