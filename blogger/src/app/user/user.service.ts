import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  authOptions(authMethod: string): any {
    switch (authMethod) {
      case 'twitter':
        return this.authService.twitterAuth();
      case 'google':
        return this.authService.googleAuth();
      case 'facebook':
        return this.authService.facebookAuth();
      case 'apple':
        return this.authService.appleAuth();
      case 'email':
        return this.authService.emailAuth();
      default:
        return;
    }
  }
  regOptions(authMethod: string): any {
    switch (authMethod) {
      case 'twitter':
        return this.authService.twitterReg();
      case 'google':
        return this.authService.googleReg();
      case 'facebook':
        return this.authService.facebookReg();
      case 'apple':
        return this.authService.appleReg();
      case 'email':
        return this.authService.emailReg();
      default:
        return;
    }
  }
  authenticateUser(authMethod: string): void {
    this.authOptions(authMethod).then((data: any) => {
      console.log(data);
      this.router.navigate(['/reader']);
    });
  }
  registerUser(authMethod: string): void {
    this.regOptions(authMethod).then((data: any) => {
      console.log(data);
      // alert(`${savedDetails.firstName} you have registered successfully`);
      this.router.navigate(['/reader']);
    });
  }

  fetchProfile(): any {
    return;
  }
}
