import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pricing' },  // <— redirect solamente
  { path: 'pricing', loadComponent: () => import('./pages/pricing-page/pricing-page.component').then(m => m.default) },
  { path: 'about', loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.default) },
  { path: 'contact', loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.default) },
  {
    path: '**',
    redirectTo: () => { return 'about' }
  },
];
