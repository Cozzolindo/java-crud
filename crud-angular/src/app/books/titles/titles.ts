import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { Books } from '../model/books';
import { BooksServices } from '../services/books_services';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, delay, of, retry } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandling } from '../../shared/components/error-handling/error-handling';

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

  constructor(
    private booksServices: BooksServices,
    public dialog: MatDialog
  ){

    //this.booksServices = new BooksServices();
    this.titles$ = this.booksServices.getBookList()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar as informações');
        return of ([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorHandling, {
      data: errorMsg
    });
  }
  ngOnInit(): void {
    // Initialization logic goes here
    console.log('Starting On Daddy');

  }
}

