import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { Books } from '../model/books';
import { BooksServices } from '../services/books_services';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-titles',
  imports: [AppMaterialModule],
  templateUrl: './titles.html',
  styleUrl: './titles.scss'
})

export class Titles implements OnInit {

  //booksServices: BooksServices;

  titles$: Observable <Books[]>;
  displayedColumns = ['name', 'type'];

  constructor(private booksServices: BooksServices){

  //this.booksServices = new BooksServices();
  this.titles$ = this.booksServices.getBookList();
  }

  ngOnInit(): void {
    // Initialization logic goes here
    console.log('Starting On Daddy');

  }




}
