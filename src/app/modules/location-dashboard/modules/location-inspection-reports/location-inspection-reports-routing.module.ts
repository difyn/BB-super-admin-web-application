import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationInspectionReportsComponent} from './location-inspection-reports.component';
import {LocationInspectionReportsContextComponent} from "./components/location-inspection-reports-context/location-inspection-reports-context.component";

const routes: Routes = [
  { path: '', component: LocationInspectionReportsComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: LocationInspectionReportsContextComponent}
    ] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationInspectionReportsRoutingModule {
}
