import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationSalesManagementComponent} from './location-sales-management.component';

const routes: Routes = [{path: '', component: LocationSalesManagementComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationSalesManagementRoutingModule {
}
