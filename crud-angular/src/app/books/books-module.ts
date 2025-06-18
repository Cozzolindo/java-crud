//PARA CRIAR MODULO E SEU ROTEAMENTO UTILIZAMOS O COMANDO NG G M <NAME> --ROUTING

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BooksRoutingModule } from './books-routing-module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class BooksModule { }
