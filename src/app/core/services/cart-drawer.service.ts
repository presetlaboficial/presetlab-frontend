import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDrawerService {
  private drawerOpen$ = new BehaviorSubject<boolean>(false);

  isOpen$ = this.drawerOpen$.asObservable();

  open() {
    this.drawerOpen$.next(true);
  }

  close() {
    this.drawerOpen$.next(false);
  }

  toggle() {
    this.drawerOpen$.next(!this.drawerOpen$.value);
  }
}
