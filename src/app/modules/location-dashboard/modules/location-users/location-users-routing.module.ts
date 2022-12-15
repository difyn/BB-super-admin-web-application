import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationUsersComponent} from './location-users.component';
import {LocationActivitiesComponent} from "../location-activities/location-activities.component";
import {LocationActivitiesContextComponent} from "../location-activities/components/location-activities-context/location-activities-context.component";
import {LocationUsersContextComponent} from "./components/location-users-context/location-users-context.component";

const routes: Routes = [
  { path: '', component: LocationUsersComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: LocationUsersContextComponent}
    ] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationUsersRoutingModule {
}
