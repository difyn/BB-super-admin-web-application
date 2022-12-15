import { Component, OnInit } from '@angular/core';
import {DynamicalChangesService} from "../../../../../share/services/dynamicalChanges/dynamical-changes.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-location-activities-context',
  templateUrl: './location-activities-context.component.html',
  styleUrls: ['./location-activities-context.component.scss']
})
export class LocationActivitiesContextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
