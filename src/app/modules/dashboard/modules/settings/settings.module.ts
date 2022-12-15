import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings.component';
import {ManageSettingsContextComponent} from './components/manage-settings-context/manage-settings-context.component';
import {SettingsPersonalInfoComponent} from './components/manage-settings-context/inner-items/settings-personal-info/settings-personal-info.component';
import {SettingsSecurityComponent} from './components/manage-settings-context/inner-items/settings-security/settings-security.component';
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


@NgModule({
  declarations: [
    SettingsComponent,
    ManageSettingsContextComponent,
    SettingsPersonalInfoComponent,
    SettingsSecurityComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
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
  ]
})
export class SettingsModule {
}
