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

  // Observable to hold the list of book titles
  // This will be used in the template to display the book titles
  titles$: Observable <Books[]>;


  constructor(
    // Injecting the BooksServices to fetch book data
    // and MatDialog for error handling dialogs
    private readonly booksServices: BooksServices,
    public dialog: MatDialog
    //private router: Router
  ){

  // Initializing the titles$ observable with the book list
  // The getBookList method returns an observable that emits the list of books
    this.titles$ = this.booksServices.getBookList()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar as informações');
        return of ([])
      })
    );
  }

  // Method to handle errors and open a dialog with the error message
  // This method is called when there is an error fetching the book list
  onError(errorMsg: string) {
    this.dialog.open(ErrorHandling, {
      data: errorMsg
    });
  }

  // Method to refresh the book list
  // This method is called to re-fetch the book list from the service
  refreshBooks() {
    this.titles$ = this.booksServices.getBookList();
  }

  ngOnInit(): void {
    // Initialization logic goes here
    console.log('Starting On Daddy');

  }
}

