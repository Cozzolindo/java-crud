import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { Books } from '../model/books';

@Component({
  selector: 'app-titles',
  imports: [AppMaterialModule],
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
