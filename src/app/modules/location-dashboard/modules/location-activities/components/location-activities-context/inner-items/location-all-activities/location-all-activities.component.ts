import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from "@angular/router";
import {LocationAllActivitiesPopUpComponent} from "./location-all-activities-pop-up/location-all-activities-pop-up.component";
import {AddNewLocationActivityComponent} from "../share/add-new-location-activity/add-new-location-activity.component";

export interface PeriodicElement {
  position: number;
  ActivityName: string;
  Description: string;
  Price: string;
  Action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 2, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 3, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 4, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 5, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 6, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 7, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 8, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 9, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
  {position: 10, ActivityName: 'Trampoline', Description: '116 Sea St, Negombo 11500',Price : '80 USD',Action: ['visibility','edit']},
];

@Component({
  selector: 'app-location-all-activities',
  templateUrl: './location-all-activities.component.html',
  styleUrls: ['./location-all-activities.component.scss']
})
export class LocationAllActivitiesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'ActivityName', 'Description', 'Price', 'Action'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router : Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LocationAllActivitiesPopUpComponent,AddNewLocationActivityComponent>
  ) { }


  locationDataViewButton(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(LocationAllActivitiesPopUpComponent, {
      width: '800px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
  addActivity(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddNewLocationActivityComponent, {
      width: '800px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }

  ngOnInit(): void {
  }

}
