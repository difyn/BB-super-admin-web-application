import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-activities-header',
  templateUrl: './location-activities-header.component.html',
  styleUrls: ['./location-activities-header.component.scss']
})
export class LocationActivitiesHeaderComponent implements OnInit {

  filteredOptions!: Observable<string[]>;

  constructor() { }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Global Village'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  searchingProduct(){

  }

  ngOnInit(): void {
  }

}
