import { Titles } from './titles/titles';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { BooksForm } from './books-form/books-form';

const routes: Routes = [

  ];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule, RouterOutlet],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
