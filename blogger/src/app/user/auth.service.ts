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

  twitterAuth(user: User): Observable<any> {
    return this.http.post('', this.options);
  }
  googleAuth(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  appleAuth(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  facebookAuth(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  emailAuth(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  twitterReg(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  googleReg(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  appleReg(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  facebookReg(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
  emailReg(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, this.options);
  }
}
