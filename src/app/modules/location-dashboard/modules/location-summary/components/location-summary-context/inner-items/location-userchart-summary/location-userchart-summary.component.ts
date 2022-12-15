import {Component, OnInit} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

@Component({
  selector: 'app-location-userchart-summary',
  templateUrl: './location-userchart-summary.component.html',
  styleUrls: ['./location-userchart-summary.component.scss']
})
export class LocationUserchartSummaryComponent implements OnInit {
  productSales: any = [
    {
      "name": "Mon",
      "value": 10,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "Tue",
      "value": 20,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "Wed",
      "value": 30,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "Thurs",
      "value": 40,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Fri",
      "value": 50,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Sat",
      "value": 60,
      "extra": {
        "code": "it"
      }
    },
    {
      "name": "Sun",
      "value": 70,
      "extra": {
        "code": "it"
      }
    }
  ];
  productSalesMulti: any = [];
  view: any = [];
  colorScheme: any = 'air';
  colorSchemeNumberCards: any = 'picnic';
  schemeType: any = 'linear';
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: any = 'below';
  legend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Sales';
  yAxisLabel: string = 'Products';
  animations: boolean = true;
  showGridlines: boolean = true;
  showDataLabel: boolean = true;
  barPadding: number = 20;
  tooltipDisable: boolean = false;
  roundEdges: boolean = false;
  pieGridHeight: any = 400;

  onSelect(event: any) {
    console.log(event);
  }

  constructor() {
    Object.assign(this, {single})
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Global Village'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  ngOnInit(): void {
  }
}
