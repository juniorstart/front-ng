import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-ui-login',
  templateUrl: './ui-login.component.html',
  styles: []
})
export class UiLoginComponent implements OnInit {
  userLogin = { login: '', password: ''};

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userLogin.password = password;
    this.userLogin.login = username;
    this.authService.login(this.userLogin)
      .subscribe(result => {
        // Store the token
        this.authService.setToken(JSON.stringify(result));
        // Redirect to home
        this.router.navigate(['']);
      });
  }

}
