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

  constructor(private router: Router, private authService: AuthenticationService,private toastr: ToastrService) { }

  ngOnInit() {
  }
}
