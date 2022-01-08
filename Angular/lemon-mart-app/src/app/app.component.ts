import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/home"><h1>{{title}}</h1></a>            
    </mat-toolbar>
    <div>Icons made by <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'LemonMart';
}
