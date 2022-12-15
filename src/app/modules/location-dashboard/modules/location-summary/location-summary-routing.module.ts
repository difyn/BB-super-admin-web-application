import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationSummaryComponent} from './location-summary.component';
import {LocationSummaryContextComponent} from "./components/location-summary-context/location-summary-context.component";

const routes: Routes = [
  { path: '', component: LocationSummaryComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: LocationSummaryContextComponent}
    ] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationSummaryRoutingModule {
}
