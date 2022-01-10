import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/manager/home" routerLinkActive="active-link">Painel do Gerente</a>
      <a mat-button routerLink="/manager/users" routerLinkActive="active-link">Gerenciar Usuários</a>
      <a mat-button routerLink="/manager/receipts" routerLinkActive="active-link">Consulta de Recibos</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
    `
      .active-link {
        font-wight: bold;
        border-bottom: 2px solid #005005;
      }
    `
  ]
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
