import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationDashboardComponent} from './location-dashboard.component';

const routes: Routes = [
  {
    path: '', component: LocationDashboardComponent, children: [
      {path: '', redirectTo: 'location-summary', pathMatch: 'full'},
      {
        path: 'location-activities',
        loadChildren: () => import('./modules/location-activities/location-activities.module').then(m => m.LocationActivitiesModule)
      },
      {
        path: 'location-inspection-reports',
        loadChildren: () => import('./modules/location-inspection-reports/location-inspection-reports.module').then(m => m.LocationInspectionReportsModule)
      },
      {
        path: 'location-operators-dashboard',
        loadChildren: () => import('./modules/location-operators-dashboard/location-operators-dashboard.module').then(m => m.LocationOperatorsDashboardModule)
      },
      {
        path: 'location-sales-management',
        loadChildren: () => import('./modules/location-sales-management/location-sales-management.module').then(m => m.LocationSalesManagementModule)
      },
      {
        path: 'location-summary',
        loadChildren: () => import('./modules/location-summary/location-summary.module').then(m => m.LocationSummaryModule)
      },
      {
        path: 'location-users',
        loadChildren: () => import('./modules/location-users/location-users.module').then(m => m.LocationUsersModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationDashboardRoutingModule {
}
