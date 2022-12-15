import { Component } from '@angular/core';
import {AuthService} from "./modules/share/services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BB-super-admin-web-application';

  constructor(private authservice: AuthService) {
  }

  ngOnInit() {
    this.authservice.autoLogin();
  }
}
