import { CartItem } from './cart-item.model';
import { OrderStatus } from './order-status.type';

export interface Order {
  id?: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt?: any;
  stripeUrl?: string;
}
