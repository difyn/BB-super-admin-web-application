import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeDashboardRoutingModule} from './home-dashboard-routing.module';
import {HomeDashboardComponent} from './home-dashboard.component';
import {DashboardHomeContextComponent} from './components/dashboard-home-context/dashboard-home-context.component';
import {ActivityFeedDashboardSummaryComponent} from './components/dashboard-home-context/inner-items/activity-feed-dashboard-summary/activity-feed-dashboard-summary.component';
import {CardDashboardSummaryComponent} from './components/dashboard-home-context/inner-items/card-dashboard-summary/card-dashboard-summary.component';
import {OperatorDashboardSummaryComponent} from './components/dashboard-home-context/inner-items/operator-dashboard-summary/operator-dashboard-summary.component';
import {UserChartDashboardSummaryComponent} from './components/dashboard-home-context/inner-items/user-chart-dashboard-summary/user-chart-dashboard-summary.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {BarChartModule, NgxChartsModule} from "@swimlane/ngx-charts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeDashboardComponent,
    DashboardHomeContextComponent,
    ActivityFeedDashboardSummaryComponent,
    CardDashboardSummaryComponent,
    OperatorDashboardSummaryComponent,
    UserChartDashboardSummaryComponent
  ],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    BarChartModule,
    NgxChartsModule,
    ReactiveFormsModule
  ],
  exports: [
    OperatorDashboardSummaryComponent,
    ActivityFeedDashboardSummaryComponent
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class HomeDashboardModule {
}
