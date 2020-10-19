import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:5001/";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private cookies: CookieService, private _router: Router) { }

  setToken(token: string):void{
    this.cookies.set('jwt', token);
  }

  login(data: Login):Observable<string>{
    return this.httpClient.post<string>(BASE_URL + 'login', data);
  }
  register(data: Register):Observable<boolean>{
    return this.httpClient.post<boolean>(BASE_URL + 'register', data);
  }
  isAuthenticated(): boolean{
    return this.cookies.get('jwt').length > 0;
  }
  logout():void{
      this.cookies.delete('jwt');
      this._router.navigate(['/login']);
  }
}
