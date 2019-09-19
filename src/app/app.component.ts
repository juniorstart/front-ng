import { Component } from '@angular/core';
import { ROUTER_ANIMATION } from './router-animations';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ROUTER_ANIMATION]
})
export class AppComponent  {

  constructor(private authService: AuthenticationService) { }

  title = 'junior-start';

  linksWithoutLogin = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/register', icon: 'person', label: 'Register' }
  ];

  linksWithLogin = [
    { path: '/', icon: 'home', label: 'Recruitment info' },
    { path: '/todo', icon: 'list', label: 'Todo list' }
  ]

  prepareRouterState(router: RouterOutlet) {
    return router.activatedRouteData['animation'] || 'initial';
  }
  isLogged(){
    return this.authService.isAuthenticated();
  }
}
