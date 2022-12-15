import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageLocationsComponent} from './manage-locations.component';
import {ManageLocationContextComponent} from "./components/manage-location-context/manage-location-context.component";

const routes: Routes = [
  {
    path: '', component: ManageLocationsComponent, children: [
      {path: '', redirectTo: 'context', pathMatch: 'full'},
      {path: 'context', component: ManageLocationContextComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLocationsRoutingModule {
}
