import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { LayoutComponent } from './shared/layout/layout';
import { UsersTableComponent } from './features/Users Table/UsersTable';
import { ProjectStatsComponent } from './features/Stats/ProjectStats';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: DashboardComponent }, //default route
      { path: 'users', component: UsersTableComponent },
      { path: 'stats', component: ProjectStatsComponent }
    ]
  },
  { path: '**', redirectTo: '' } // wildcard route to catch undefined paths and redirect to default
];

