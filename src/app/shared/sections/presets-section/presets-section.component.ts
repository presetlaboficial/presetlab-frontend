import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-presets-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './presets-section.component.html',
  styleUrls: ['./presets-section.component.scss'],
})
export class PresetsSectionComponent implements OnInit {
  presets: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getPresets().subscribe((products) => {
      this.presets = products;
    });
  }
}
