import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

interface Food {
  value: string;
  viewValue: string;
}
interface status {
  status1: string;
  status2: string;
}

@Component({
  selector: 'app-location-view-edit-users',
  templateUrl: './location-view-edit-users.component.html',
  styleUrls: ['./location-view-edit-users.component.scss']
})
export class LocationViewEditUsersComponent implements OnInit {

  filteredOptions!: Observable<string[]>;
  hide = true;
  disableEnable: boolean = false;
  disableEnableText: string = 'unlock';

  constructor(public dialogRef: MatDialogRef<LocationViewEditUsersComponent>) {
  }
  addUserForm = new FormGroup({
    fullName: new FormControl('', ),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    reenterPassword: new FormControl(''),
  });
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Manager'},
    {value: 'pizza-1', viewValue: 'Supervisor'},
    {value: 'tacos-2', viewValue: 'Cashier'},
    {value: 'tacos-2', viewValue: 'Trampoline'},
  ];
  status: status[] = [
    {status1: '0', status2: 'Active'},
    {status1: '1', status2: 'InActive'},
  ];
  cancelPopupButton(){
    this.dialogRef.close('Pizza!');
  }
  disableEnableForm(){
    if (this.disableEnable == false){
      this.addUserForm.enable();
      this.disableEnable = true;
      this.disableEnableText = 'lock';
    }else {
      this.disableEnable = false;
      this.addUserForm.disable();
      this.disableEnableText = 'unlock';
    }
  }

  ngOnInit(): void {
    this.addUserForm.disable();
  }
}
