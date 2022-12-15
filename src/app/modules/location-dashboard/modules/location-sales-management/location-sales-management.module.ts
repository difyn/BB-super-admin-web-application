import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationSalesManagementRoutingModule} from './location-sales-management-routing.module';
import {LocationSalesManagementComponent} from './location-sales-management.component';


@NgModule({
  declarations: [
    LocationSalesManagementComponent
  ],
  imports: [
    CommonModule,
    LocationSalesManagementRoutingModule
  ]
})
export class LocationSalesManagementModule {
}
