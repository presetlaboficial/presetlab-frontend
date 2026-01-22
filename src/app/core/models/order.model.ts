import { CartItem } from './cart-item.model';
import { Timestamp } from '@angular/fire/firestore';

export interface Order {
  id?: string;
  userId: string;
  items: CartItem[];
  total: number;
  createdAt?: Timestamp;
}
