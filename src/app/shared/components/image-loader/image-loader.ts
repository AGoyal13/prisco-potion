import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  standalone: true,
  templateUrl: './image-loader.html',
  styleUrl: './image-loader.scss',
})
export class ImageLoaderComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() aspectRatio = '4/3';
  @Input() borderRadius = 'var(--radius-lg)';
  @Input() objectFit = 'cover';
  @Input() cssFilter = '';
  @Input() bgColor = '';

  loaded = false;

  onLoad(): void {
    this.loaded = true;
  }
}
