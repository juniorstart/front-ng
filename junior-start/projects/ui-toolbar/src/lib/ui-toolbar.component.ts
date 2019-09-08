import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'lib-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styles: []
})
export class UiToolbarComponent {
  @Input() isLoggedIn;
  @Input() title;
  @Input() sidenav;

}
