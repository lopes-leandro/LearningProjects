import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar fxLayoutGap="8px" color="primary">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>      
      </button>
      <!-- <mat-icon svgIcon="lemon"></mat-icon> -->
      <button mat-button routerLink="/home">
        <span class="mat-h2"><h1>{{title}}</h1></span>
      </button> 
      <span class="flex-spacer"></span>
      <button mat-icon-button routerLink="/user/profile" matTooltip="Profile" aria-label="User Profile">
        <mat-icon>account_circle</mat-icon>
      </button>
      <button mat-icon-button routerLink="/user/logout" matTooltip="Logout" aria-label="Logout">
        <mat-icon>lock_open</mat-icon>
      </button>           
    </mat-toolbar>
    <div>Icons made by <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'LemonMart';
}
