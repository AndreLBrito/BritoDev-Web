import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/language-redirect/language-redirect').then(
        ({ LanguageRedirect }) => LanguageRedirect,
      ),
  },
  {
    path: 'pt-br',
    data: { language: 'pt-BR' },
    loadComponent: () => import('./features/home/home').then(({ Home }) => Home),
  },
  {
    path: 'es',
    data: { language: 'es' },
    loadComponent: () => import('./features/home/home').then(({ Home }) => Home),
  },
  {
    path: 'en',
    data: { language: 'en' },
    loadComponent: () => import('./features/home/home').then(({ Home }) => Home),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(({ NotFound }) => NotFound),
  },
];
