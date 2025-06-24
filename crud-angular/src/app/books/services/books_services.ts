import { inject, Injectable } from '@angular/core';
import { Books } from '../model/books';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServices {


  //private http = inject(HttpClient);
  constructor(private httpClient: HttpClient ) { }

  getBookList(){
    const url="api/books";
    return this.httpClient.get<Books[]>(url)
    .pipe(first(),
    //delay(15000),
    tap(titles => console.log(titles)));
  }
}
