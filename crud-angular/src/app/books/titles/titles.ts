import { Component } from '@angular/core';
import { Books } from '../model/books';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-titles',
  imports: [MatTableModule],
  templateUrl: './titles.html',
  styleUrl: './titles.scss'
})
export class Titles {

  titles: Books[];
  displayedColumns = ['name', 'type'];
  constructor(){
    this.titles = []
  }

}
