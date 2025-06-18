import { inject, Injectable } from '@angular/core';
import { Books } from '../model/books';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksServices {


  //private http = inject(HttpClient);
  constructor(private httpClient: HttpClient ) { }

  getBookList(){
    const url="http://localhost:3000/books";
    return this.httpClient.get<Books[]>(url);
  }
}
