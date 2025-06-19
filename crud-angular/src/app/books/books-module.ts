//PARA CRIAR MODULO E SEU ROTEAMENTO UTILIZAMOS O COMANDO NG G M <NAME> --ROUTING

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material-module';
import { SharedModule } from '../shared/shared-module';
import { BooksRoutingModule } from './books-routing-module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class BooksModule { }
