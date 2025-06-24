import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';

@Component({
  selector: 'app-books-form',
  imports: [RouterModule, RouterOutlet, AppMaterialModule],
  templateUrl: './books-form.html',
  styleUrl: './books-form.scss'
})
export class BooksForm {

}
