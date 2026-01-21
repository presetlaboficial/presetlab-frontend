import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartDrawerService } from '../../services/cart-drawer.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  menuOpen = false;

  constructor(
    private cartService: CartService,
    private cartDrawer: CartDrawerService
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  openCart(){
    this.cartDrawer.toggle();
  }
}
