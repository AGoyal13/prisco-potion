import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ValueCardComponent } from '../../shared/components/value-card/value-card';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ScrollRevealDirective,
    SectionHeaderComponent,
    ValueCardComponent,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  directorImageSrc = 'assets/products/beer/shourya.webp';

  values = [
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
      title: 'Quality Assurance',
      description:
        'Every product that bears our name — or is brought under our portfolio — meets the highest standards of craft, sourcing, and authenticity. No compromise.',
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 014 13c0-7 7-11 7-11s7 4 7 11a7 7 0 01-7 7z"/><path d="M11 20V10"/></svg>`,
      title: 'Sustainability',
      description:
        'We are committed to responsible practices across our supply chain — from conscientious sourcing to eco-aware distribution and packaging decisions.',
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
      title: 'Integrity',
      description:
        'Trust is the foundation of every partnership we build — with producers, retailers, distributors, and consumers. We operate with complete transparency.',
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      title: 'Innovation',
      description:
        'True to our tagline, we constantly push boundaries — exploring new categories, markets, and formats to deliver fresh experiences to the Indian palate.',
    },
  ];
}
