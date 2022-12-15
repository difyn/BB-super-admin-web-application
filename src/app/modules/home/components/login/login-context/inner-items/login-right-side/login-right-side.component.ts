import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthResponseData, AuthService} from "../../../../../../share/services/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-right-side',
  templateUrl: './login-right-side.component.html',
  styleUrls: ['./login-right-side.component.scss']
})
export class LoginRightSideComponent implements OnInit {
  hide = true;
  email: any;
  password: any;
  isLoading = false;
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.minLength(3), Validators.maxLength(100), Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  getLoginData(type: string): any {
    return this.loginForm.get(type);
  }

  submitLoginData() {
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    authObs = this.authService.login(this.email, this.password);

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['dashboard/home-dashboard'])
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;

      }
    );
    this.loginForm.reset();
  }


  ngOnInit(): void {
  }

}
