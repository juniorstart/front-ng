import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Register } from 'src/app/interfaces/register.interface';
import { Login } from 'src/app/interfaces/login.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService,private toastr: ToastrService) { }

  _registerForm:FormGroup;
  _userLogin:Login;
  _userRegister:Register;
  ngOnInit() {
    this._registerForm = new FormGroup({
      login: new FormControl([null], [Validators.required, Validators.minLength(6)]),
      password: new FormControl([null], [Validators.required,Validators.minLength(6)]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl([null],[Validators.required, Validators.email])
    });
  }

  register(){
    this._userLogin = this._registerForm.value['login'];
    this._userLogin = this._registerForm.value['password'];
    //zrobić data-providera przed serwisem
    this.authService.register(Object.assign(this._userRegister, this._registerForm.value))
      .subscribe(
        result=> this.authService.login(this._userLogin),
        error=>this.toastr.error(error),
        ()=>this.toastr.success('Registred sucessfully'));
  }
}
