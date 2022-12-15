import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-users-header',
  templateUrl: './location-users-header.component.html',
  styleUrls: ['./location-users-header.component.scss']
})
export class LocationUsersHeaderComponent implements OnInit {

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
