import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./components/home-page/home-page')
        .then(m => m.HomePage)
  }, 
  {
    path: 'services/web-development',
    loadComponent: () =>
      import('./components/web-development/web-development')
        .then(m => m.WebDevelopment)
  },
  {
    path: 'services/mobile-apps',
    loadComponent: () =>
      import('./components/mobile-apps/mobile-apps')
        .then(m => m.MobileApps)
  },
  {
    path: 'services/ui-ux',
    loadComponent: () =>
      import('./components/ui-ux/ui-ux')
        .then(m => m.UiUx)
  },
  {
    path: 'services/consulting',
    loadComponent: () =>
      import('./components/consulting/consulting')
        .then(m => m.Consulting)
  }
];