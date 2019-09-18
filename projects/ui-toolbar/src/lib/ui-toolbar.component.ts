import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'lib-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss']
})
export class UiToolbarComponent {

  constructor(private authService: AuthenticationService,private toastr: ToastrService) { }

  @Input() isLoggedIn: boolean;
  @Input() title: string;
  @Input() sidenav: MatSidenav;

  logout(){
    this.authService.logout();
    this.toastr.success("logged out");
  }
}
