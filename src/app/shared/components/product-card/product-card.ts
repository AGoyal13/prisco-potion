import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImageLoaderComponent } from '../image-loader/image-loader';

export interface Product {
  name: string;
  tagline: string;
  description: string;
  category: string;
  imageSrc: string;
  accent?: 'crimson' | 'gold';
  videoSrc?: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ImageLoaderComponent],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() imageObjectFit = 'cover';
  @Output() cardClick = new EventEmitter<Product>();
}
