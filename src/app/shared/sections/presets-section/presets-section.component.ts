import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-presets-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './presets-section.component.html',
  styleUrls: ['./presets-section.component.scss'],
})
export class PresetsSectionComponent {
  presets: Product[] = [
    {
      id: 1,
      name: 'Preset Matuê - "Xtranho"',
      description:
        'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
      price: 20,
      image:
        'assets/imgs/presets/artworks-KJVK9AAzQpNyygGn-qfgyfA-t1080x1080.webp',
      category: 'preset',
    },
    {
      id: 2,
      name: 'Preset Matuê - "Xtranho"',
      description:
        'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
      price: 20,
      image:
        'assets/imgs/presets/artworks-KJVK9AAzQpNyygGn-qfgyfA-t1080x1080.webp',
      category: 'preset',
    },
    {
      id: 3,
      name: 'Preset Matuê - "Xtranho"',
      description:
        'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
      price: 20,
      image:
        'assets/imgs/presets/artworks-KJVK9AAzQpNyygGn-qfgyfA-t1080x1080.webp',
      category: 'preset',
    },
    {
      id: 4,
      name: 'Preset Matuê - "Xtranho"',
      description:
        'Preset profissional desenvolvido para alcançar timbres modernos, limpos e prontos para mixagem. Ideal para trap, rap e vocal melódico',
      price: 20,
      image:
        'assets/imgs/presets/artworks-KJVK9AAzQpNyygGn-qfgyfA-t1080x1080.webp',
      category: 'preset',
    },
  ];
}
