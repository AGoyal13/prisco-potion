import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Vision & Values', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'International', path: '/international' },
    { label: 'Network', path: '/network' },
    { label: 'Press', path: '/press' },
    { label: 'Contact', path: '/contact' },
  ];

  ownBrands = [
    { label: 'Macarena', sub: 'Premium Beer' },
    { label: 'Fingerprint', sub: 'Craft Beer' },
    { label: 'Crossbones', sub: 'Strong Beer' },
    { label: 'Damelo', sub: 'Whiskey' },
    { label: 'Roman Kings', sub: 'Whiskey' },
    { label: 'Roman Warrior', sub: 'Whiskey' },
  ];

  internationalBrands = [
    'Tigre Blanc', 'VIVIR Tequila', 'Hepple Gin',
    'Ignite', 'Moonshadow', 'Wattshot',
  ];
}
