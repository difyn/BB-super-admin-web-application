import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicalChangesService {

  dashboardWidthDynamicChangeWidth: any;

  constructor() {
  }

  public storeDynamicData(RoutePages: any) {
    this.dashboardWidthDynamicChangeWidth = RoutePages;
  }
}
