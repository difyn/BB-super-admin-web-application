import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginContextComponent} from './components/login/login-context/login-context.component';
import {LoginLeftSideComponent} from './components/login/login-context/inner-items/login-left-side/login-left-side.component';
import {LoginRightSideComponent} from './components/login/login-context/inner-items/login-right-side/login-right-side.component';
import {SignUpContextComponent} from './components/sign-up/sign-up-context/sign-up-context.component';
import {SignUpLeftSideComponent} from './components/sign-up/sign-up-context/inner-items/sign-up-left-side/sign-up-left-side.component';
import {SignUpRightSideComponent} from './components/sign-up/sign-up-context/inner-items/sign-up-right-side/sign-up-right-side.component';
import {ShareModule} from "../share/share.module";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LoginContextComponent,
    LoginLeftSideComponent,
    LoginRightSideComponent,
    SignUpContextComponent,
    SignUpLeftSideComponent,
    SignUpRightSideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    ShareModule,
    // AppModule
  ]
})
export class HomeModule {
}
