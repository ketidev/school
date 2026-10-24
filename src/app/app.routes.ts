import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full',
  },
  {
    path: 'students',
    loadComponent: () => import('./list/list/list').then((m) => m.List),
  },
];
