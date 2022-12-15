import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-add-user',
  templateUrl: './location-add-user.component.html',
  styleUrls: ['./location-add-user.component.scss']
})
export class LocationAddUserComponent implements OnInit {

  filteredOptions!: Observable<string[]>;
  hide = true;

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<LocationAddUserComponent>) {
  }

  addUserForm = new FormGroup({
    fullName: new FormControl('', ),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    reenterPassword: new FormControl(''),
  });
  clearForm(){
    this.addUserForm.reset();
  }
  cancelPopupButton(){
    this.dialogRef.close('Pizza!');
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Manager'},
    {value: 'pizza-1', viewValue: 'Supervisor'},
    {value: 'tacos-2', viewValue: 'Cashier'},
    {value: 'tacos-2', viewValue: 'Trampoline'},
  ];


  ngOnInit(): void {
  }

}
