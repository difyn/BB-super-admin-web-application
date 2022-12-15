import {Component, OnInit} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-operator-dashboard-summary',
  templateUrl: './operator-dashboard-summary.component.html',
  styleUrls: ['./operator-dashboard-summary.component.scss']
})
export class OperatorDashboardSummaryComponent implements OnInit {
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
