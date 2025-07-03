import { Injectable } from '@angular/core';
import { Books } from '../model/books';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServices {

  private readonly API = 'api/books';
  //private http = inject(HttpClient);
  constructor(private readonly httpClient: HttpClient ) { }

  // Get the list of books
  getBookList(){

    return this.httpClient.get<Books[]>(this.API)
    .pipe(first(),
    delay(3000), //delay applied for testing mat-spinner
    tap(titles => console.log(titles)));
  }

  // Save a new book record
  save(record: Books){

   return this.httpClient.post<Books>(this.API, record);
  }

  //Update an existing book record
  update(id: string, record: Books): Observable<Books> {
    return this.httpClient.put<Books>(`${this.API}/${id}`, record);
  }

  //Get a book by its ID
  getBookById(id: string): Observable<Books> {

    return this.httpClient.get<Books>(`${this.API}/${id}`);
  }

}
