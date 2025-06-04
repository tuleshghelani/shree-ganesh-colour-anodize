import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: 'services/colour-anodizing',
    loadComponent: () => import('./pages/colour-anodizing/colour-anodizing.component').then(m => m.ColourAnodizingComponent)
  },
  {
    path: 'services/chrome-plating',
    loadComponent: () => import('./pages/chrome-plating/chrome-plating.component').then(m => m.ChromePlatingComponent)
  },
  {
    path:'services/powder-coating',
    loadComponent: () => import('./pages/powder-coating/powder-coating.component').then(m => m.PowderCoatingComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
  // ... other routes
];
