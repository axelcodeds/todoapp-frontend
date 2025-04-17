import { Routes } from '@angular/router';
import { authGuard } from '../../core/auth/guards/auth.guard';

export const TASK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/task-list/task-list.component').then(m => m.TaskListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./components/task-form/task-form.component').then(m => m.TaskFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/task-detail/task-detail.component').then(m => m.TaskDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./components/task-form/task-form.component').then(m => m.TaskFormComponent)
  }
];
