import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Register} from 'src/app/interfaces/register.interface';
import {Login} from 'src/app/interfaces/login.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  _registerForm: FormGroup;
  _userLogin: Login;
  _userRegister: Register;
  submitted = false;
  constructor(private router: Router, private authService: AuthenticationService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this._registerForm = new FormGroup({
      login: new FormControl([null], [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z].*')]),
      password: new FormControl([null], [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*')]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl([null], [Validators.required, Validators.email])
    });
  }

  register() {
    this.submitted = true;
    if (this._registerForm.valid) {
      this._userLogin = this._registerForm.value['login'];

      this.authService.register(Object.assign({User: this._registerForm.value}))
        .subscribe(
          result => this.authService.login(this._userLogin),
          error => {
            if (error.error.errors) {
              (Object.values(error.error.errors) as string[]).reduce((acc, val) => acc.concat(val), []).forEach(msg => this.toastr.error(msg));
            } else {
              this.toastr.error(error.error.ErrorMessage);
            }
          },
          () => this.toastr.success('Registred sucessfully'));
    }
  }

}
