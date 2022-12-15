import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings-personal-info',
  templateUrl: './settings-personal-info.component.html',
  styleUrls: ['./settings-personal-info.component.scss']
})
export class SettingsPersonalInfoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  manageSettings = new FormGroup({
    username: new FormControl('',),
    name: new FormControl(''),
    emailAddress: new FormControl(''),
  });

  resetFormButton() {
    this.manageSettings.reset();
  }
}
