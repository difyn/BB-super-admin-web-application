import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-card-summary',
  templateUrl: './location-card-summary.component.html',
  styleUrls: ['./location-card-summary.component.scss']
})
export class LocationCardSummaryComponent implements OnInit {

  filteredOptions!: Observable<string[]>;

  constructor() {
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Global Village'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  ngOnInit(): void {

  }

  searchingProduct() {

  }
}
