import { Component } from '@angular/core';
import { Books } from '../model/books';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-titles',
  imports: [MatTableModule, MatCardModule, MatToolbarModule, MatIconModule],
  templateUrl: './titles.html',
  styleUrl: './titles.scss'
})
export class Titles {

  titles: Books[];
  displayedColumns = ['name', 'type'];
  constructor(){
    this.titles = [{id:'1', name:'Goodbye, Eri', type:'Manga'}];
  }

}
