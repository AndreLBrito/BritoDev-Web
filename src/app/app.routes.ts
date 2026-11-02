import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(({ Home }) => Home),
    title: 'BritoDev | Sites, sistemas e integrações',
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(({ NotFound }) => NotFound),
    title: 'Página não encontrada | BritoDev',
  },
];
