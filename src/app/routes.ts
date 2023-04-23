import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
{
  path: '',
  loadChildren: () =>import('./views/views.routes').then(m => m.VIEWS_ROUTES)
}
];

