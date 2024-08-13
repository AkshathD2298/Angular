import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/api-data">API Data</a>
      <a routerLink="/form">Form</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],

  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
