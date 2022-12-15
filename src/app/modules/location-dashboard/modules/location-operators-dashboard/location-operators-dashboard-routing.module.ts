import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationOperatorsDashboardComponent} from './location-operators-dashboard.component';
import {LocationInspectionReportsComponent} from "../location-inspection-reports/location-inspection-reports.component";
import {LocationInspectionReportsContextComponent} from "../location-inspection-reports/components/location-inspection-reports-context/location-inspection-reports-context.component";
import {LocationOperatorsDashboardContextComponent} from "./components/location-operators-dashboard-context/location-operators-dashboard-context.component";

const routes: Routes = [
  { path: '', component: LocationOperatorsDashboardComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: LocationOperatorsDashboardContextComponent}
    ] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationOperatorsDashboardRoutingModule {
}
