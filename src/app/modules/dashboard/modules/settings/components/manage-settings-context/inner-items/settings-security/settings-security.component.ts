import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings-security',
  templateUrl: './settings-security.component.html',
  styleUrls: ['./settings-security.component.scss']
})
export class SettingsSecurityComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  manageSettings = new FormGroup({
    currentPassword: new FormControl('',),
    newPassword: new FormControl(''),
    confirmNewPassword: new FormControl(''),
  });

  resetFormButton() {
    this.manageSettings.reset();
  }
}
