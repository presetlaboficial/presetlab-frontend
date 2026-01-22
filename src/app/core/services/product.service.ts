import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getPresets(): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'products');
    const q = query(
      productsRef,
      where('category', '==', 'preset'),
      where('active', '==', true),
    );

    return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
  }
}
