import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  auth: User = { email: null, password: null };
  authMethod = '';
  authInitiated = false;
  constructor(private userService: UserService, private router: Router) {}

  setAuthMethod(loginType: string): void {
    // console.log();
    this.authMethod = loginType;
    this.authInitiated = true;
  }
  x = () => console.log('works');

  onSubmit(loginForm: NgForm): void {
    // this.userService.authenticateUser(this.authMethod, this.auth);
    console.log(this.authMethod);
    this.router.navigate(['/reader']);
  }
  ngOnInit(): void {}
}
