import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationActivitiesComponent} from './location-activities.component';
import {LocationActivitiesContextComponent} from "./components/location-activities-context/location-activities-context.component";

const routes: Routes = [
  { path: '', component: LocationActivitiesComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: LocationActivitiesContextComponent}
    ] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationActivitiesRoutingModule {
}
