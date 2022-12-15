import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-inspection-report-header',
  templateUrl: './location-inspection-report-header.component.html',
  styleUrls: ['./location-inspection-report-header.component.scss']
})
export class LocationInspectionReportHeaderComponent implements OnInit {

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
