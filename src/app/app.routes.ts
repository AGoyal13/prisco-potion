import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    title: 'Prisco Potion — We Think Outside the Bottle',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    title: 'About Us — Prisco Potion',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then(m => m.ProductsComponent),
    title: 'Our Products — Prisco Potion',
  },
  {
    path: 'international',
    loadComponent: () =>
      import('./pages/international/international').then(m => m.InternationalComponent),
    title: 'International Division — Prisco Potion',
  },
  {
    path: 'network',
    loadComponent: () => import('./pages/network/network').then(m => m.NetworkComponent),
    title: 'Our Network — Prisco Potion',
  },
  {
    path: 'press',
    loadComponent: () => import('./pages/press/press').then(m => m.PressComponent),
    title: 'Press & Articles — Prisco Potion',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    title: 'Contact Us — Prisco Potion',
  },
  { path: '**', redirectTo: '' },
];
