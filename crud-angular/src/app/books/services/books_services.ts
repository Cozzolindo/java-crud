import { Injectable } from '@angular/core';
import { Books } from '../model/books';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServices {


  //private http = inject(HttpClient);
  constructor(private readonly httpClient: HttpClient ) { }

  getBookList(){
    const url="api/books";
    return this.httpClient.get<Books[]>(url)
    .pipe(first(),
    tap(titles => console.log(titles)));
  }

  save(record: Books){
    const url="api/books";
   return this.httpClient.post<Books>(url, record);
  }

}
