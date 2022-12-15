import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from "../share/guard/auth.guard";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'home-dashboard', pathMatch: 'full'},
      {
        path: 'home-dashboard',
        loadChildren: () => import('./modules/home-dashboard/home-dashboard.module').then(m => m.HomeDashboardModule)
      },
      {
        path: 'manage-locations',
        loadChildren: () => import('./modules/manage-locations/manage-locations.module').then(m => m.ManageLocationsModule)
      },
      {path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
