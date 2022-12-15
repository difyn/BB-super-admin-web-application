import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {
    path: 'location-dashboard',
    loadChildren: () => import('./modules/location-dashboard/location-dashboard.module').then(m => m.LocationDashboardModule)
  },
  {path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
