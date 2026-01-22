import { CartItem } from "./cart-item.model";

export type OrderStatus = 'pending' | 'paid' | 'done' | 'canceled';

export interface Order {
  id?: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt?: any;
}
