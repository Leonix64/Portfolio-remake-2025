import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.page').then( m => m.ProjectsPage)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.page').then( m => m.SkillsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then( m => m.ContactPage)
  },
];
