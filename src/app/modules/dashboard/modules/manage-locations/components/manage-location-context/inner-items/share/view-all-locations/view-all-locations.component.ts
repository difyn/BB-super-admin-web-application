import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

interface Food {
  value: string;
  viewValue: string;
}
interface status {
  status1: string;
  status2: string;
}

@Component({
  selector: 'app-view-all-locations',
  templateUrl: './view-all-locations.component.html',
  styleUrls: ['./view-all-locations.component.scss']
})
export class ViewAllLocationsComponent implements OnInit {


  filteredOptions!: Observable<string[]>;
  hide = true;
  disableEnable: boolean = false;
  disableEnableText: string = 'Suspend';

  constructor(public dialogRef: MatDialogRef<ViewAllLocationsComponent>) {
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
    {value: 'steak-0', viewValue: 'BB20'},
    {value: 'pizza-1', viewValue: 'BB50'},
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
      this.disableEnableText = 'Suspend';
    }else {
      this.disableEnable = false;
      this.addUserForm.disable();
      this.disableEnableText = 'Activate';
    }
  }

  ngOnInit(): void {
    this.addUserForm.disable();
  }
}
