import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

interface NetworkNode {
  icon: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SectionHeaderComponent],
  templateUrl: './network.html',
  styleUrl: './network.scss',
})
export class NetworkComponent {
  private sanitizer = inject(DomSanitizer);

  safeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  nodes: NetworkNode[] = [
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>`,
      title: 'Manufacturing',
      description:
        'Our in-house manufacturing arm, Exquisite Spirit and Beverages Pvt. Ltd., produces our own-label beers and whiskeys under stringent quality protocols.',
      stats: [
        { label: 'Own Labels', value: '6+' },
        { label: 'Categories', value: '2' },
      ],
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L11 8 2.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 7.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
      title: 'Importation',
      description:
        'Licensed importers of international spirits. We handle end-to-end regulatory compliance, customs clearance, and secure logistics for all foreign brands.',
      stats: [
        { label: 'Int\'l Brands', value: '9+' },
        { label: 'Countries', value: '6+' },
      ],
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      title: 'Distribution',
      description:
        'Robust last-mile distribution network covering key markets across India — ensuring our portfolio reaches retail shelves, hotels, and restaurants efficiently.',
      stats: [
        { label: 'Markets', value: 'Pan India' },
        { label: 'Channels', value: 'Multi' },
      ],
    },
    {
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      title: 'Expansion',
      description:
        'Actively scouting new international partnerships and emerging domestic markets. Our network is built to scale — new brands, new regions, new opportunities.',
      stats: [
        { label: 'Mode', value: 'Active' },
        { label: 'Horizon', value: 'Global' },
      ],
    },
  ];

  subsidiary = {
    name: 'Exquisite Spirit & Beverages Pvt. Ltd.',
    role: 'Manufacturing Subsidiary',
    description:
      'The production engine behind Prisco Potion\'s own-label portfolio. Exquisite Spirit & Beverages operates as our dedicated distillery and brewing facility, ensuring every bottle that carries our name meets the highest standards of craft and consistency.',
    highlights: [
      'Artisanal brewing and distilling processes',
      'Stringent in-house quality control',
      'Own-label beers: Macarena, Fingerprint, Crossbones',
      'Own-label whiskeys: Damelo, Roman Kings, Roman Warrior',
      'Located in Okhla Industrial Area, New Delhi',
    ],
  };
}
