import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {MatIconModule} from "@angular/material/icon";
import {HomeDashboardModule} from "./modules/home-dashboard/home-dashboard.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    HomeDashboardModule
  ]
})
export class DashboardModule {
}
