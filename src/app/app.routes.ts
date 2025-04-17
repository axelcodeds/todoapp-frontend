import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';
import { roleGuard } from './core/auth/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./views/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./features/tasks/tasks.routes').then(m => m.TASK_ROUTES),
    canActivate: [authGuard]
  },
  // {
  //   path: 'admin',
  //   loadComponent: () => import('./features/admin/admin.component').then(m => m.AdminComponent),
  //   canActivate: [authGuard, roleGuard],
  //   data: { roles: ['admin'] }
  // },
  {
    path: 'unauthorized',
    loadComponent: () => import('./views/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
  },
  { path: '**', redirectTo: '' }
];
