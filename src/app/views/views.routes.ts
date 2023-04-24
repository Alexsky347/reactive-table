import { Routes } from '@angular/router';
import { AuthorizedGuard } from '../core/guard/authorized.guard';

export const VIEWS_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'xp',
    loadChildren: () =>
      import('./xp/xp.routes').then((m) => m.XP_ROUTES),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((m) => m.HOME_ROUTES),
    // canActivate: [() => inject(AuthorizedGuard).isAuthenticated()],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
