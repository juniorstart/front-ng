import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'junior-start';

  links = [
    { path: '/login', icon: 'user', label: 'Login' },
    { path: '/', icon: 'home', label: 'Home' },
  ];

}
