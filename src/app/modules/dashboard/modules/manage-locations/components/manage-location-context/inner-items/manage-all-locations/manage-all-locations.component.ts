import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddLocationPopupComponent} from "./add-location-popup/add-location-popup.component";
import {ViewAllLocationsComponent} from "../share/view-all-locations/view-all-locations.component";

export interface PeriodicElement {
  position: number;
  name: string;
  weight: string;
  symbol: string;
  BalloonType: string;
  Action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 2,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 3,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 4,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 5,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 6,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 7,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 8,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 9,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
  {
    position: 10,
    name: 'Global Village, Dubai',
    weight: 'USD',
    symbol: '116 Sea St, Negombo 11500',
    BalloonType: 'BB20',
    Action: ['visibility', 'edit']
  },
];

@Component({
  selector: 'app-manage-all-locations',
  templateUrl: './manage-all-locations.component.html',
  styleUrls: ['./manage-all-locations.component.scss']
})
export class ManageAllLocationsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'BalloonType', 'Action'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, public dialog: MatDialog, public dialogRef: MatDialogRef<AddLocationPopupComponent,ViewAllLocationsComponent>) {
  }


  locationDataViewButton() {
    this.router.navigate(['location-dashboard/']);
  }

  addLocation(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddLocationPopupComponent, {
      width: '800px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
  EditLocation(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ViewAllLocationsComponent, {
      width: '800px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }

  ngOnInit(): void {
  }

}
