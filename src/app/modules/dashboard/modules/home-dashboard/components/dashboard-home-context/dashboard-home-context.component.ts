import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {DynamicalChangesService} from "../../../../../share/services/dynamicalChanges/dynamical-changes.service";

@Component({
  selector: 'app-dashboard-home-context',
  templateUrl: './dashboard-home-context.component.html',
  styleUrls: ['./dashboard-home-context.component.scss']
})
export class DashboardHomeContextComponent implements OnInit {

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
