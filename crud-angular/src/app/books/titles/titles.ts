import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { Books } from '../model/books';
import { BooksServices } from '../services/books_services';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandling } from '../../shared/components/error-handling/error-handling';
import { RouterModule } from '@angular/router';
import { BooksList } from "../books-list/books-list";

@Component({
  selector: 'app-titles',
  imports: [AppMaterialModule, RouterModule, BooksList],
  templateUrl: './titles.html',
  styleUrl: './titles.scss'
})

export class Titles implements OnInit {

  //booksServices: BooksServices;

  titles$: Observable <Books[]>;


  constructor(
    private readonly booksServices: BooksServices,
    public dialog: MatDialog
    //private router: Router
  ){


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

  refreshBooks() {
  this.titles$ = this.booksServices.getBookList();
}

  ngOnInit(): void {
    // Initialization logic goes here
    console.log('Starting On Daddy');

  }
}

