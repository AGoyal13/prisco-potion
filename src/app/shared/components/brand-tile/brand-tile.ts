import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from '../image-loader/image-loader';

export interface Brand {
  name: string;
  origin: string;
  type: string;
  logoSrc?: string;
  videoSrc?: string;
  logoInvert?: boolean;
  logoBg?: string;
  logoObjectFit?: string;
}

@Component({
  selector: 'app-brand-tile',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './brand-tile.html',
  styleUrl: './brand-tile.scss',
})
export class BrandTileComponent {
  @Input() brand!: Brand;
  @Output() tileClick = new EventEmitter<Brand>();

  get initials(): string {
    return this.brand.name
      .split(' ')
      .map(w => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
