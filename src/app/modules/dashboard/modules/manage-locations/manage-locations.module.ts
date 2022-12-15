import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManageLocationsRoutingModule} from './manage-locations-routing.module';
import {ManageLocationsComponent} from './manage-locations.component';
import {ManageLocationContextComponent} from './components/manage-location-context/manage-location-context.component';
import {ManageAllLocationsComponent} from './components/manage-location-context/inner-items/manage-all-locations/manage-all-locations.component';
import {ManageLocationHeaderComponent} from './components/manage-location-context/inner-items/manage-location-header/manage-location-header.component';
import {AddLocationPopupComponent} from './components/manage-location-context/inner-items/manage-all-locations/add-location-popup/add-location-popup.component';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { ViewAllLocationsComponent } from './components/manage-location-context/inner-items/share/view-all-locations/view-all-locations.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ManageLocationsComponent,
    ManageLocationContextComponent,
    ManageAllLocationsComponent,
    ManageLocationHeaderComponent,
    AddLocationPopupComponent,
    ViewAllLocationsComponent
  ],
  imports: [
    CommonModule,
    ManageLocationsRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
  ]
})
export class ManageLocationsModule {
}
