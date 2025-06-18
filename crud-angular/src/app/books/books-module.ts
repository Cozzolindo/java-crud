//PARA CRIAR MODULO E SEU ROTEAMENTO UTILIZAMOS O COMANDO NG G M <NAME> --ROUTING

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing-module';
import { AppMaterialModule } from '../shared/app-material/app-material-module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AppMaterialModule
  ]
})
export class BooksModule { }
