//PARA CRIAR MODULO E SEU ROTEAMENTO UTILIZAMOS O COMANDO NG G M <NAME> --ROUTING

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing-module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
