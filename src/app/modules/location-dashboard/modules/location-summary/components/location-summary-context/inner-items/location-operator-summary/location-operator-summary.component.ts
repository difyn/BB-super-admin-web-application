import {Component, OnInit} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-operator-summary',
  templateUrl: './location-operator-summary.component.html',
  styleUrls: ['./location-operator-summary.component.scss']
})
export class LocationOperatorSummaryComponent implements OnInit {
  batteryCellFill: any;
  batteryCellColor: any;
  constructor() {
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Global Village'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  ngOnInit(): void {
    this.batteryCellFill = '80%';
    this.batteryCellColor = '#5BC236';
  }
}
