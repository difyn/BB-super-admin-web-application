import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationUsersRoutingModule} from './location-users-routing.module';
import {LocationUsersComponent} from './location-users.component';
import { LocationUsersContextComponent } from './components/location-users-context/location-users-context.component';
import { LocationUsersHeaderComponent } from './components/location-users-context/inner-items/location-users-header/location-users-header.component';
import { LocationAllUsersComponent } from './components/location-users-context/inner-items/location-all-users/location-all-users.component';
import { LocationAddUserComponent } from './components/location-users-context/inner-items/share/location-add-user/location-add-user.component';
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
import { LocationViewEditUsersComponent } from './components/location-users-context/inner-items/location-all-users/location-view-edit-users/location-view-edit-users.component';


@NgModule({
  declarations: [
    LocationUsersComponent,
    LocationUsersContextComponent,
    LocationUsersHeaderComponent,
    LocationAllUsersComponent,
    LocationAddUserComponent,
    LocationViewEditUsersComponent
  ],
  imports: [
    CommonModule,
    LocationUsersRoutingModule,
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
export class LocationUsersModule {
}
