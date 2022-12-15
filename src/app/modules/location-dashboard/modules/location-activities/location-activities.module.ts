import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationActivitiesRoutingModule} from './location-activities-routing.module';
import {LocationActivitiesComponent} from './location-activities.component';
import { LocationActivitiesContextComponent } from './components/location-activities-context/location-activities-context.component';
import { LocationAllActivitiesComponent } from './components/location-activities-context/inner-items/location-all-activities/location-all-activities.component';
import { LocationActivitiesHeaderComponent } from './components/location-activities-context/inner-items/location-activities-header/location-activities-header.component';
import { LocationAllActivitiesPopUpComponent } from './components/location-activities-context/inner-items/location-all-activities/location-all-activities-pop-up/location-all-activities-pop-up.component';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { AddNewLocationActivityComponent } from './components/location-activities-context/inner-items/share/add-new-location-activity/add-new-location-activity.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        LocationActivitiesComponent,
        LocationActivitiesContextComponent,
        LocationAllActivitiesComponent,
        LocationActivitiesHeaderComponent,
        LocationAllActivitiesPopUpComponent,
        AddNewLocationActivityComponent
    ],
    imports: [
        CommonModule,
        LocationActivitiesRoutingModule,
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
      FormsModule
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
export class LocationActivitiesModule {
}
