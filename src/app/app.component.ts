import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'junior-start';

  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/customers', icon: 'face', label: 'Customers' },
    { path: '/projects', icon: 'work', label: 'Projects' }
  ];
  
}
