import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginInterface } from 'src/app/interfaces/loginInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService,private toastr: ToastrService) { }

  _loginForm:FormGroup;
  _userLogin:LoginInterface;

  ngOnInit(){
    this._loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  login(loginForm:FormGroup) {
    this._userLogin.password = loginForm['password'];
    this._userLogin.login = loginForm['username'];
    this.authService.login(this._userLogin)
      .subscribe(result => {
        // Store the token
        this.authService.setToken(JSON.stringify(result));
        this.toastr.success('Logged succesfully');
        this.router.navigate(['']);
      });
  }

}
