import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-manage-location-header',
  templateUrl: './manage-location-header.component.html',
  styleUrls: ['./manage-location-header.component.scss']
})
export class ManageLocationHeaderComponent implements OnInit {

  filteredOptions!: Observable<string[]>;

  constructor() {
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Global Village'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  searchingProduct() {

  }

  ngOnInit(): void {
  }
}
