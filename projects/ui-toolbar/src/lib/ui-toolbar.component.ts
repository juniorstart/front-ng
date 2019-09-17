import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'lib-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss']
})
export class UiToolbarComponent {
  constructor(private authService: AuthenticationService,private toastr: ToastrService) { }
  @Input() isLoggedIn;
  @Input() title;
  @Input() sidenav;

  logout(){
    this.authService.logout();
    this.toastr.success("logged out");
  }
}
