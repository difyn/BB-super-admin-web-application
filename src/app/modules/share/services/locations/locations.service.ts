import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  RoutePages: any;

  constructor() {
  }

  public storePageRoutes(RoutePages: any) {
    this.RoutePages = RoutePages;
  }
}
