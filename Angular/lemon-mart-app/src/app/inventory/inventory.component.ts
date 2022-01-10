import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/inventory/home" routerLinkActive="active-link">Painel de Inventário</a>
      <a mat-button routerLink="/inventory/stock-entry" routerLinkActive="active-link">Estoque</a>
      <a mat-button routerLink="/inventory/products" routerLinkActive="active-link">Produtos</a>
      <a mat-button routerLink="/inventory/categories" routerLinkActive="active-link">Categorias</a>
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
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
