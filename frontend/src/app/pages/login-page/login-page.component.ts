import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter Your Mail';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getPErrorMessage() {
    if(this.password.hasError('required')) {
      return 'You Must Enter your Password';
    }

    return this.password.hasError('email') ? 'Not a Valid Password' : '';
  }

  onLogin(email:string, password:string) {

    this.auth.login(email,password)

  }
}



