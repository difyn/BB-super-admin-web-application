import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationSummaryRoutingModule} from './location-summary-routing.module';
import {LocationSummaryComponent} from './location-summary.component';
import {LocationSummaryContextComponent} from './components/location-summary-context/location-summary-context.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {LocationActivityFeedSummaryComponent} from './components/location-summary-context/inner-items/location-activity-feed-summary/location-activity-feed-summary.component';
import {LocationCardSummaryComponent} from './components/location-summary-context/inner-items/location-card-summary/location-card-summary.component';
import {LocationOperatorSummaryComponent} from './components/location-summary-context/inner-items/location-operator-summary/location-operator-summary.component';
import {LocationUserchartSummaryComponent} from './components/location-summary-context/inner-items/location-userchart-summary/location-userchart-summary.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BarChartModule, NgxChartsModule} from "@swimlane/ngx-charts";


@NgModule({
  declarations: [
    LocationSummaryComponent,
    LocationSummaryContextComponent,
    LocationActivityFeedSummaryComponent,
    LocationCardSummaryComponent,
    LocationOperatorSummaryComponent,
    LocationUserchartSummaryComponent
  ],
  imports: [
    CommonModule,
    LocationSummaryRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    BarChartModule,
    NgxChartsModule,
    ReactiveFormsModule
  ],
  exports: [
    LocationOperatorSummaryComponent,
    LocationActivityFeedSummaryComponent
  ],
})
export class LocationSummaryModule {
}
