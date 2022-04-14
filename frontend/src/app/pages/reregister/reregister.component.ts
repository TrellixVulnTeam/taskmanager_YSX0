import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reregister',
  templateUrl: './reregister.component.html',
  styleUrls: ['./reregister.component.css']
})
export class ReregisterComponent implements OnInit {
  name = new FormControl('',[Validators.required] )
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  cPassword = new FormControl('', [Validators.required])
  hide = true;


  constructor() { }

  ngOnInit(): void {
  }


   getNameMessage() {
     if(this.name.hasError('required')) {
       return 'Enter Name'
     }
      return 'Enter Valid Name'
   }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter Your Mail';
    }

    return this.email.hasError('email') ? 'Not a Valid Email' : '';
  }


  getPErrorMessage() {
    if(this.password.hasError('required')) {
      return 'You Must Enter your Password';
    }



    return this.password.hasError('minLength') ? 'Password should be of Length 6' : '';
  }

  onStrengthChanged(e:any) {
    console.log(e,"Password")
  }
}



