import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    title: 'Prisco Potion — We Think Outside the Bottle',
    data: {
      seo: {
        description:
          'Prisco Potion Pvt. Ltd. — premier manufacturer, importer & distributor of fine wines, craft spirits and quality beers, based in New Delhi, India.',
      },
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    title: 'About Us — Prisco Potion',
    data: {
      seo: {
        description:
          'Our story: a passion for exceptional beverages. Learn how Prisco Potion manufactures, imports and distributes premium wines, spirits and beers across India.',
      },
    },
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then(m => m.ProductsComponent),
    title: 'Our Products — Prisco Potion',
    data: {
      seo: {
        description:
          'Explore Prisco Potion’s own-label craft beers and whiskeys — including Macarena, Crossbones and Fingerprint — crafted for discerning palates.',
      },
    },
  },
  {
    path: 'international',
    loadComponent: () =>
      import('./pages/international/international').then(m => m.InternationalComponent),
    title: 'International Division — Prisco Potion',
    data: {
      seo: {
        description:
          'Prisco Potion’s International Division curates and brings exclusive global spirits and wines — including VIVIR Tequila and Hepple Gin — to India.',
      },
    },
  },
  {
    path: 'network',
    loadComponent: () => import('./pages/network/network').then(m => m.NetworkComponent),
    title: 'Our Network — Prisco Potion',
    data: {
      seo: {
        description:
          'Built to move: Prisco Potion operates end to end across India — manufacturing, importing and distributing fine wines, spirits and beers nationwide.',
      },
    },
  },
  {
    path: 'press',
    loadComponent: () => import('./pages/press/press').then(m => m.PressComponent),
    title: 'Press & Articles — Prisco Potion',
    data: {
      seo: {
        description:
          'Press & media coverage of Prisco Potion Pvt. Ltd. — news, articles and features on our brands, partnerships and growth in the Indian beverage industry.',
      },
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    title: 'Contact Us — Prisco Potion',
    data: {
      seo: {
        description:
          'Get in touch with Prisco Potion for distribution partnerships, trade enquiries and collaboration opportunities. Based in Okhla, New Delhi, India.',
      },
    },
  },
  { path: '**', redirectTo: '' },
];
