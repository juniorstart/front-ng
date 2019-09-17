import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginInterface } from '../interfaces/loginInterface';
import { RegisterInterface } from '../interfaces/registerInterface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const BASE_URL = "http://localhost:5001/";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient,private cookies: CookieService,private _router: Router) { }

  setToken(token:string){
    this.cookies.set('jwt', token);
  }

  login(data: LoginInterface){
    return this.httpClient.post(BASE_URL + 'login',data);
  }
  register(data: RegisterInterface){
    return this.httpClient.post(BASE_URL + 'register',data);
  }
  isAuthenticated(){
    return this.cookies.get('jwt').length > 0;
  }
  logout(){
      this.cookies.delete('jwt');
      this._router.navigate(['/login']);
  }
}
