import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService,private toastr: ToastrService) { }

  _loginForm:FormGroup;
  _userLogin:Login;

  ngOnInit(){
    this._loginForm = new FormGroup({
      login: new FormControl([null], [Validators.required, Validators.minLength(6)]),
      password: new FormControl([null], [Validators.required, Validators.minLength(6)])
    });

    this._userLogin = {} as Login;
  }

  login() {

    this.authService.login(Object.assign(this._userLogin, this._loginForm.value))
      .subscribe(result => {
        // Store the token
        this.authService.setToken(JSON.stringify(result));
        this.toastr.success('Logged succesfully');
        this.router.navigate(['']);
      },error  => {
        if (error.error.errors) {
          (Object.values(error.error.errors) as string[]).reduce((acc, val) => acc.concat(val), []).forEach(msg => this.toastr.error(msg));
        } else {
          this.toastr.error(error.error.ErrorMessage);
        }

      });
  }

}
