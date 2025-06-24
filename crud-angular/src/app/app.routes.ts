import { Routes } from '@angular/router';
import { BooksForm } from './books/books-form/books-form';
import { Titles } from './books/titles/titles';

export const routes: Routes = [
  {
    path: 'home',
    component: Titles
  },
  {
    path: 'new',
    component: BooksForm
  }
];
