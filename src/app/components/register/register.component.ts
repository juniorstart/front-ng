import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterInterface } from 'src/app/interfaces/registerInterface';
import { LoginInterface } from 'src/app/interfaces/loginInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService,private toastr: ToastrService) { }

  _registerForm:FormGroup;
  _userLogin:LoginInterface;
  _userRegister:RegisterInterface;
  ngOnInit() {
    this._registerForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });
  }

  register(registerForm:FormGroup){
    this._userLogin = registerForm.value['login'];
    this._userLogin = registerForm.value['password'];
    //zrobić data-providera przed serwisem
    this.authService.register(this._userRegister)
      .subscribe(
        result=> this.authService.login(this._userLogin),
        error=>this.toastr.error(error),
        ()=>this.toastr.success('Registred sucessfully'));
  }
}
