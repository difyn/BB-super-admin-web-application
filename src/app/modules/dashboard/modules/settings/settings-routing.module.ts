import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {ManageLocationsComponent} from "../manage-locations/manage-locations.component";
import {ManageLocationContextComponent} from "../manage-locations/components/manage-location-context/manage-location-context.component";
import {ManageSettingsContextComponent} from "./components/manage-settings-context/manage-settings-context.component";

const routes: Routes = [
  {
    path: '', component: SettingsComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: ManageSettingsContextComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
