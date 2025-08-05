import { Injectable } from '@angular/core';
import { Books } from '../model/books';
import { HttpClient } from '@angular/common/http';
import { first, Observable } from 'rxjs';
import { BooksPage } from '../model/books-page';

@Injectable({
  providedIn: 'root'
})
export class BooksServices {

  private readonly API = 'api/books';
  //private http = inject(HttpClient);
  constructor(private readonly httpClient: HttpClient ) { }

  // Get the list of books
  getBookList(pageNum = 0, pageSize = 5): Observable<BooksPage> {

    // This method fetches the list of books from the API
    // It returns an observable that emits an array of Books objects
    return this.httpClient.get<BooksPage>(this.API, { params: { pageNum, pageSize } })
    .pipe(first());
  }

  // Save a new book record
  save(record: Books){

    // This method sends a POST request to the API to save a new book record
    // It returns an observable that emits the saved Books object
    // The record parameter is of type Books, which contains the book details
   return this.httpClient.post<Books>(this.API, record);
  }

  //Update an existing book record
  update(id: string, record: Books): Observable<Books> {
    // This method sends a PUT request to the API to update an existing book record
    // It returns an observable that emits the updated Books object
    return this.httpClient.put<Books>(`${this.API}/${id}`, record);
  }

  // Delete a book by its ID
  delete(id: string){
    // This method sends a DELETE request to the API to delete a book by its ID
    // It returns an observable that completes when the deletion is successful
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  //Get a book by its ID
  getBookById(id: string): Observable<Books> {
    // This method fetches a book by its ID from the API
    // It returns an observable that emits the Books object corresponding to the given ID
    return this.httpClient.get<Books>(`${this.API}/${id}`);
  }

}
