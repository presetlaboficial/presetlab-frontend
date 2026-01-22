import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { CartDrawerService } from '../../core/services/cart-drawer.service';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product!: Product;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private cartDrawer: CartDrawerService,
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.product = {
      id,
      name: 'Preset Matuê - "Xtranho"',
      description:
        'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
      price: 20,
      image:
        'assets/imgs/presets/artworks-KJVK9AAzQpNyygGn-qfgyfA-t1080x1080.webp',
      category: 'preset',
    };

    this.relatedProducts = [
      {
        id: '2',
        name: 'Preset Trap Vocal',
        description:
          'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
        price: 15,
        image: this.product.image,
        category: 'preset',
      },
      {
        id: '3',
        name: 'Preset Boom Bap',
        description:
          'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
        price: 18,
        image: this.product.image,
        category: 'preset',
      },
      {
        id: '4',
        name: 'Preset Drill',
        description:
          'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
        price: 22,
        image: this.product.image,
        category: 'preset',
      },
    ];
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.cartDrawer.open(); // UX 🔥
  }
}
