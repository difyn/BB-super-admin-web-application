import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationOperatorsDashboardRoutingModule} from './location-operators-dashboard-routing.module';
import {LocationOperatorsDashboardComponent} from './location-operators-dashboard.component';
import { LocationOperatorsDashboardContextComponent } from './components/location-operators-dashboard-context/location-operators-dashboard-context.component';
import { LocationOperatorDashboardHeaderComponent } from './components/location-operators-dashboard-context/inner-items/location-operator-dashboard-header/location-operator-dashboard-header.component';
import { LocationOperatorDashboardBodyComponent } from './components/location-operators-dashboard-context/inner-items/location-operator-dashboard-body/location-operator-dashboard-body.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    LocationOperatorsDashboardComponent,
    LocationOperatorsDashboardContextComponent,
    LocationOperatorDashboardHeaderComponent,
    LocationOperatorDashboardBodyComponent
  ],
  imports: [
    CommonModule,
    LocationOperatorsDashboardRoutingModule,
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
    MatCheckboxModule,
    MatDividerModule
  ]
})
export class LocationOperatorsDashboardModule {
}
