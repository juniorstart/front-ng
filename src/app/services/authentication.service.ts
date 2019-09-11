import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

const BASE_URL = "http://localhost:5001/";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient,private cookies: CookieService) { }

  setToken(token){
    this.cookies.set('jwt', token);
  }

  login(data){
    console.log(data);
    return this.httpClient.post(BASE_URL + 'login',data);
  }
  register(data){
    return this.httpClient.post(BASE_URL + 'register',data);
  }
  isAuthenticated(){
    var token = this.cookies.get('jwt');
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
}
