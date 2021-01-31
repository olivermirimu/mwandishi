import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private userService: UserService) {}

  setAuthMethod(loginType: string): void {
    this.authMethod = loginType;
    this.authInitiated = true;
  }

  onSubmit(loginForm: NgForm): void {
    this.userService.authenticateUser(this.authMethod).subscribe((user:User)=>{
      
    });
  }
  ngOnInit(): void {}
}
