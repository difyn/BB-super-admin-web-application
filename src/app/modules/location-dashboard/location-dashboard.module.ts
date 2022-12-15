import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationDashboardRoutingModule} from './location-dashboard-routing.module';
import {LocationDashboardComponent} from './location-dashboard.component';
import {MatIconModule} from "@angular/material/icon";
import {LocationSummaryModule} from "./modules/location-summary/location-summary.module";

@NgModule({
  declarations: [
    LocationDashboardComponent,
  ],
  imports: [
    CommonModule,
    LocationDashboardRoutingModule,
    MatIconModule,
    LocationSummaryModule,
  ]
})
export class LocationDashboardModule {
}
