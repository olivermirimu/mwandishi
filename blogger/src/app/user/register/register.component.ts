import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  auth: User = {
    firstname: null,
    lastname: null,
    mobile: null,
    email: null,
    password: null,
    cPassword: null,
  };
  authError: any;
  authMethod = '';
  authInitiated = false;
  constructor() {}

  setAuthMethod(authType: string): void {
    this.authMethod = authType;
    this.authInitiated = true;
  }

  onSubmit(registerForm: NgForm): void {
    if (this.auth.cPassword !== this.auth.password) {
      this.authError = { message: 'Password mismatch' };
      return;
    }
    console.log(this.auth);
  }

  ngOnInit(): void {}
}
