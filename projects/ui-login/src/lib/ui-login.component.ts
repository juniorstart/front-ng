import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lib-ui-login',
  templateUrl: './ui-login.component.html',
  styles: []
})
export class UiLoginComponent implements OnInit {
  userLogin = { login: '', password: ''};
  userRegister = { 
    user:{
      id:1,
      firstName: '',
      lastName: '',
      email: '',
      login: '',
      password: ''
    }
  }
  constructor(private router: Router, private authService: AuthenticationService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userLogin.password = password;
    this.userLogin.login = username;
    this.authService.login(this.userLogin)
      .subscribe(result => {
        // Store the token
        this.authService.setToken(JSON.stringify(result));
        this.toastr.success('Logged succesfully');
        this.router.navigate(['']);
      });
  }
  register(){
    this.authService.register(this.userRegister)
      .subscribe(
        result=> this.login(this.userRegister.user.login,this.userRegister.user.password),
        error=>this.toastr.error(error),
        ()=>this.toastr.success('Registred sucessfully'));
  }

}
