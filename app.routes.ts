import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'filmedetalhe',
    loadComponent: () => import('./filmedetalhe/filmedetalhe.page').then( m => m.FilmedetalhePage)
  },
  {
    path: 'serie-detalhe',
    loadComponent: () => import('./serie-detalhe/serie-detalhe.page').then( m => m.SerieDetalhePage)
  },
];
