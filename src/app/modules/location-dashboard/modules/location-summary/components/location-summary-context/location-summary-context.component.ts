import {Component, OnInit} from '@angular/core';
import {DynamicalChangesService} from 'src/app/modules/share/services/dynamicalChanges/dynamical-changes.service';
import {interval} from "rxjs";

@Component({
  selector: 'app-location-summary-context',
  templateUrl: './location-summary-context.component.html',
  styleUrls: ['./location-summary-context.component.scss']
})
export class LocationSummaryContextComponent implements OnInit {
  dashboardWidthDynamicChangeWidth: any;

  constructor(private dynamicalChanges: DynamicalChangesService) {
  }

  storeDynamicData() {
    this.dashboardWidthDynamicChangeWidth = this.dynamicalChanges.dashboardWidthDynamicChangeWidth;
    console.log(this.dashboardWidthDynamicChangeWidth);
  }

  ngOnInit(): void {
    this.storeDynamicData();
    interval(100)
      .subscribe(() => {
        this.storeDynamicData();
      });
  }

}
