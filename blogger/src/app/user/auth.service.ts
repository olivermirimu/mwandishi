import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = '';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.setTokenHeader(),
    }),
  };
  constructor(private http: HttpClient) {}

  // helper functions
  setTokenHeader(): string {
    return 'token';
  }

  twitterAuth(): Observable<any> {
    return this.http.post('', this.options);
  }
  googleAuth(): void {}
  appleAuth(): void {}
  facebookAuth(): void {}
  emailAuth(): void {}
  twitterReg(): void {}
  googleReg(): void {}
  appleReg(): void {}
  facebookReg(): void {}
  emailReg(user: User): Observable<User> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
}
