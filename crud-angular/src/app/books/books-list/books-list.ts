import { Component, Input } from '@angular/core';
import { Books } from '../model/books';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-books-list',
  imports: [SharedModule, RouterModule],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss'
})
export class BooksList {

  @Input() titles: Books[] = [];

  readonly displayedColumns = ['name', 'type', 'actions'];

}
