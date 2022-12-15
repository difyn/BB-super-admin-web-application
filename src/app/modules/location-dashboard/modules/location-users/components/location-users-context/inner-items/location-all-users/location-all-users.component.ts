import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LocationAddUserComponent} from "../share/location-add-user/location-add-user.component";
import {LocationViewEditUsersComponent} from "./location-view-edit-users/location-view-edit-users.component";

export interface PeriodicElement {
  position: number;
  FullName: string;
  Email: string;
  PhoneNumber: string;
  Username: any;
  Password: any;
  Action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 2, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 3, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 4, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 5, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 6, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 7, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 8, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
  {position: 9, FullName: 'Enoke Deelaka', Email: 'enokedeelakakulathunga@gmail.com',PhoneNumber : '0767297111',Username : 'Enoke Deelaka',Password : 'Hello12345',Action: ['visibility','edit']},
];

@Component({
  selector: 'app-location-all-users',
  templateUrl: './location-all-users.component.html',
  styleUrls: ['./location-all-users.component.scss']
})
export class LocationAllUsersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'FullName', 'Email', 'PhoneNumber', 'Username','Password','Action'];
  dataSource = ELEMENT_DATA;

  constructor(private router : Router, public dialog: MatDialog, public dialogRef: MatDialogRef<LocationAddUserComponent,LocationViewEditUsersComponent>) { }


  locationDataViewButton(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(LocationViewEditUsersComponent, {
      width: '800px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
  addActivity(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LocationAddUserComponent, {
      width: '800px',
      // enterAnimationDuration,
      // exitAnimationDuration,
      panelClass: 'custom-container'
    });
  }


  ngOnInit(): void {
  }

}
