import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../../../share/services/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-right-side',
  templateUrl: './sign-up-right-side.component.html',
  styleUrls: ['./sign-up-right-side.component.scss']
})
export class SignUpRightSideComponent implements OnInit {

  hide = true;
  email: any;
  password: any;
  isLoading = false;
  error: string = '';

  constructor(private authService: AuthService) {
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.minLength(3), Validators.maxLength(100), Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  getLoginData(type: string): any {
    return this.loginForm.get(type);
  }

  submitLoginData() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.get('email')?.value);
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;

    this.isLoading = true;
    this.authService.signup(this.email, this.password).subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.error = errorMessage;
      this.isLoading = false;
    });
    this.loginForm.reset();
  }

  ngOnInit(): void {
  }

}
