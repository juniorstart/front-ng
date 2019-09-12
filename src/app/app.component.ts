import { Component } from '@angular/core';
import { ROUTER_ANIMATION } from './router-animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ROUTER_ANIMATION]
})
export class AppComponent  {
  title = 'junior-start';

  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/', icon: 'home', label: 'Recruitment info' },
    { path: '/todo', icon: 'list', label: 'Todo list' },
  ];

  prepareRouterState(router: RouterOutlet) {
    return router.activatedRouteData['animation'] || 'initial';
  }
}
