import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  query,
  where,
  orderBy,
} from '@angular/fire/firestore';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private ordersRef;

  constructor(private firestore: Firestore) {
    this.ordersRef = collection(this.firestore, 'orders');
  }

  createOrder(order: Order) {
    return addDoc(this.ordersRef, {
      ...order,
      createdAt: new Date(),
    });
  }

  getOrdersByUser(userId: string): Observable<Order[]> {
    const q = query(
      this.ordersRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
    );

    return collectionData(q, { idField: 'id' }) as Observable<Order[]>;
  }
}
