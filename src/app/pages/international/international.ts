import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { BrandTileComponent, Brand } from '../../shared/components/brand-tile/brand-tile';

@Component({
  selector: 'app-international',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SectionHeaderComponent, BrandTileComponent],
  templateUrl: './international.html',
  styleUrl: './international.scss',
})
export class InternationalComponent {
  private sanitizer = inject(DomSanitizer);

  selectedBrand = signal<Brand | null>(null);

  safeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  openModal(brand: Brand): void {
    if (window.innerWidth < 768) return;
    this.selectedBrand.set(brand);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedBrand.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedBrand()) this.closeModal();
  }

  brandInitials(brand: Brand): string {
    return brand.name
      .split(' ')
      .map(w => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  brands: Brand[] = [
    { name: 'Tigre Blanc', origin: 'France', type: 'White Tiger Vodka', logoSrc: 'assets/products/beer/tigre blanc.svg' },
    { name: 'ALAMBIC', origin: 'International', type: 'Premium Spirits', logoSrc: 'assets/products/beer/alambic.webp' },
    { name: 'Moonshadow', origin: 'International', type: 'Craft Spirits', logoSrc: 'assets/products/beer/moonshadow.svg', logoInvert: true },
    { name: 'VIVIR Tequila', origin: 'Mexico', type: 'Artisanal Tequila', logoSrc: 'assets/products/beer/vivir-icon-white.webp' },
    { name: 'Hepple Gin', origin: 'England', type: 'Super Premium Gin', logoSrc: 'assets/products/beer/hepple.webp', logoObjectFit: 'none' },
    { name: 'Bartolomeo', origin: 'Italy', type: 'Artisanal Spirits', logoSrc: 'assets/products/beer/bartolonio.svg', logoInvert: true },
    { name: 'WATTASHOT', origin: 'International', type: 'Premium Spirits', logoSrc: 'assets/products/beer/wattshot-new.webp' },
    { name: 'Fino Tequila', origin: 'Mexico', type: 'Fino Tequila', logoSrc: 'assets/products/beer/fino.webp', logoBg: '#ffffff' },
    { name: 'Ignite', origin: 'International', type: 'Premium Vodka', logoSrc: 'assets/products/beer/ignite.svg' }
  ];

  pillars = [
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
      title: 'Global Sourcing',
      desc: 'We identify and partner with world-class distilleries and producers across every major spirits-producing region.',
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
      title: 'Rigorous Curation',
      desc: 'Every brand in our international portfolio passes through a thorough quality evaluation, authenticity check, and market fit assessment.',
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
      title: 'Compliant Importation',
      desc: 'Full regulatory compliance, proper licensing, and documentation — ensuring every bottle reaches the shelf legitimately.',
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
      title: 'Partnership First',
      desc: 'We build long-term relationships with international producers, ensuring exclusivity, consistency, and collaborative growth.',
    },
  ];
}
