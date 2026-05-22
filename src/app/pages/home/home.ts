import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card';

interface QuickLink {
  title: string;
  desc: string;
  path: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective, GlassCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  quickLinks: QuickLink[] = [
    {
      title: 'Our Products',
      desc: 'Explore our own-label beers and whiskeys crafted for discerning palates.',
      path: '/products',
      label: 'Explore Products',
    },
    {
      title: 'International Division',
      desc: 'Exclusive global spirits and wines, curated and brought to India.',
      path: '/international',
      label: 'View Portfolio',
    },
    {
      title: 'Our Network',
      desc: 'Manufacture, import, distribute — we operate end to end across India.',
      path: '/network',
      label: 'See Network',
    },
    {
      title: 'Partner With Us',
      desc: 'Distribution partnerships, trade enquiries, and collaboration opportunities.',
      path: '/contact',
      label: 'Get in Touch',
    },
  ];
}
