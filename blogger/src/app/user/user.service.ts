import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = '';
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  fetchUser(user: User): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/currentUser`);
  }
  authOptions(authMethod: string, user: User): any {
    switch (authMethod) {
      case 'twitter':
        return this.authService.twitterAuth(user);
      case 'google':
        return this.authService.googleAuth(user);
      case 'facebook':
        return this.authService.facebookAuth(user);
      case 'apple':
        return this.authService.appleAuth(user);
      case 'email':
        return this.authService.emailAuth(user);
      default:
        return;
    }
  }
  regOptions(authMethod: string, user: User): any {
    switch (authMethod) {
      case 'twitter':
        return this.authService.twitterReg(user);
      case 'google':
        return this.authService.googleReg(user);
      case 'facebook':
        return this.authService.facebookReg(user);
      case 'apple':
        return this.authService.appleReg(user);
      case 'email':
        return this.authService.emailReg(user);
      default:
        return;
    }
  }
  authenticateUser(authMethod: string, user: User): void {
    this.authOptions(authMethod, user).then((data: any) => {
      console.log(data);
      this.router.navigate(['/reader']);
    });
  }
  registerUser(authMethod: string, user: User): void {
    this.regOptions(authMethod, user).then((data: any) => {
      console.log(data);
      // alert(`${savedDetails.firstName} you have registered successfully`);
      this.router.navigate(['/reader']);
    });
  }

  fetchProfile(): any {
    return;
  }
}
