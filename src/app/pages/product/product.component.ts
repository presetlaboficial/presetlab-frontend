import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { CartDrawerService } from '../../core/services/cart-drawer.service';
import { ProductService } from '../../core/services/product.service';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: Product;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private cartDrawer: CartDrawerService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.productService.getProductById(id).subscribe((product) => {
      if (!product.active) {
        return;
      }

      this.product = product;

      this.productService.getPresets().subscribe((products) => {
        this.relatedProducts = products
          .filter((p) => p.id !== product.id)
          .slice(0, 3);
      });
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.cartDrawer.open();
  }
}
