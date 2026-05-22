import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ProductCardComponent, Product } from '../../shared/components/product-card/product-card';

type Tab = 'beer' | 'whiskey';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent {
  activeTab = signal<Tab>('beer');
  selectedProduct = signal<Product | null>(null);

  openModal(product: Product): void {
    if (window.innerWidth < 768) return;
    this.selectedProduct.set(product);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProduct.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProduct()) this.closeModal();
  }

  beers: Product[] = [
    {
      name: 'Macarena',
      tagline: 'Smooth & Refreshing',
      description:
        'A well-balanced premium lager with a crisp finish and golden hue. Light on the palate, rich in character.',
      category: 'Premium Beer',
      imageSrc: 'assets/products/beer/macarena.webp',
      accent: 'gold',
      videoSrc: 'assets/products/video/video.mp4',
    },
    {
      name: 'Fingerprint',
      tagline: 'Distinctly Yours',
      description:
        'A craft beer with a signature complexity — each sip leaves an impression as unique as the one holding the glass.',
      category: 'Craft Beer',
      imageSrc: 'assets/products/beer/fingerpint.webp',
      accent: 'gold',
      videoSrc: 'assets/products/beer/fingerprint.mp4',
    },
    {
      name: 'Crossbones',
      tagline: 'Bold & Unapologetic',
      description:
        'A strong, full-bodied beer brewed for those who refuse to compromise. Intense malt character, assertive finish.',
      category: 'Strong Beer',
      imageSrc: 'assets/products/beer/crossbones.webp',
      accent: 'crimson',
      videoSrc: 'assets/products/beer/crossbones.mp4',
    },
  ];

  whiskeys: Product[] = [
    // {
    //   name: 'Damelo',
    //   tagline: 'Give Me More',
    //   description:
    //     'Smooth, warming, and complex — a whiskey that demands to be savoured slowly. Rich caramel notes with a long, satisfying finish.',
    //   category: 'Blended Whiskey',
    //   imageSrc: 'assets/products/beer/crossbones.webp',
    //   accent: 'gold',
    // },
    {
      name: 'Roman Kings',
      tagline: 'Reign Supreme',
      description:
        'Crafted for those with a regal taste. A refined blended whiskey with layers of oak, vanilla, and dried fruit.',
      category: 'Premium Whiskey',
      imageSrc: 'assets/products/beer/roman-kings.webp',
      accent: 'gold',
    },
    {
      name: 'Roman Warrior',
      tagline: 'Forged in Strength',
      description:
        'A bold, powerful whiskey with a character as fierce as its name. Deep smokiness, robust body, and a heroic finish.',
      category: 'Bold Whiskey',
      imageSrc: 'assets/products/beer/roman-warrior.webp',
      accent: 'crimson',
    },
  ];

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  get activeProducts(): Product[] {
    return this.activeTab() === 'beer' ? this.beers : this.whiskeys;
  }
}
