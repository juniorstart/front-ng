import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from '../models/user';

const BASE_URL = `${environment.apiUrl}/`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserKey = 'current-user';

  constructor(private httpClient: HttpClient, private cookies: CookieService, private router: Router, private jwtHelper: JwtHelperService) { }

  setToken(token: string): void {
    this.cookies.set('jwt', token);
  }

  login(data: Login): Observable<string> {
    const response = this.httpClient.post<string>(BASE_URL + 'login', data);
    response.toPromise().then(x => this.setUser(x));
    return response;
  }
  register(data: Register): Observable<boolean>{
    return this.httpClient.post<boolean>(BASE_URL + 'register', data);
  }
  isAuthenticated(): boolean {
    return this.cookies.get('jwt').length > 0;
  }

  getUser = (): string => {
    const ob = JSON.parse(localStorage.getItem(this.currentUserKey));
    const user = JSON.parse(ob['unique_name']);
    return user;
  }

  setUser = (token: string): void => {
    localStorage.setItem(
      this.currentUserKey,
      JSON.stringify(this.jwtHelper.decodeToken(token))
    );
  }

  logout(): void {
      this.cookies.delete('jwt');
      localStorage.removeItem(this.currentUserKey);
      this.router.navigate(['/login']);
  }
}
