import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationInspectionReportsRoutingModule} from './location-inspection-reports-routing.module';
import {LocationInspectionReportsComponent} from './location-inspection-reports.component';
import { LocationInspectionReportsContextComponent } from './components/location-inspection-reports-context/location-inspection-reports-context.component';
import { LocationInspectionReportHeaderComponent } from './components/location-inspection-reports-context/inner-items/location-inspection-report-header/location-inspection-report-header.component';
import { LocationInspectionAllReportsComponent } from './components/location-inspection-reports-context/inner-items/location-inspection-all-reports/location-inspection-all-reports.component';
import { LocationAllInspectionReportsPopUpComponent } from './components/location-inspection-reports-context/inner-items/location-inspection-all-reports/location-all-inspection-reports-pop-up/location-all-inspection-reports-pop-up.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from '@angular/material/menu';
import { AddLocationInspectionMonthlyReportComponent } from './components/location-inspection-reports-context/inner-items/share/add-location-inspection-monthly-report/add-location-inspection-monthly-report.component';
import { AddLocationInspectionDailyReportComponent } from './components/location-inspection-reports-context/inner-items/share/add-location-inspection-daily-report/add-location-inspection-daily-report.component';
import { AddLocationInspectionWeeklyReportComponent } from './components/location-inspection-reports-context/inner-items/share/add-location-inspection-weekly-report/add-location-inspection-weekly-report.component';
import { AddLocationInspectionQuartelyReportComponent } from './components/location-inspection-reports-context/inner-items/share/add-location-inspection-quartely-report/add-location-inspection-quartely-report.component';
import { AddLocationInspectionSemiAnnualReportComponent } from './components/location-inspection-reports-context/inner-items/share/add-location-inspection-semi-annual-report/add-location-inspection-semi-annual-report.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    LocationInspectionReportsComponent,
    LocationInspectionReportsContextComponent,
    LocationInspectionReportHeaderComponent,
    LocationInspectionAllReportsComponent,
    LocationAllInspectionReportsPopUpComponent,
    AddLocationInspectionMonthlyReportComponent,
    AddLocationInspectionDailyReportComponent,
    AddLocationInspectionWeeklyReportComponent,
    AddLocationInspectionQuartelyReportComponent,
    AddLocationInspectionSemiAnnualReportComponent
  ],
  imports: [
    CommonModule,
    LocationInspectionReportsRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [
    {provide:MAT_DIALOG_DATA,useValue:{}},
    {provide:MatDialogRef , useValue:{} },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class LocationInspectionReportsModule {
}
