import { Component, inject, OnInit   } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { BooksServices } from '../services/books_services';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Genre {
    value: string;
    viewValue: string;
}
@Component({
  selector: 'app-books-form',
  imports: [RouterModule, AppMaterialModule, SharedModule],
  templateUrl: './books-form.html',
  styleUrl: './books-form.scss'
})


export class BooksForm implements OnInit{

  form: FormGroup;

  private readonly snackBar = inject(MatSnackBar);

  genres: Genre[] = [
    { value: '', viewValue: '' }, // Null/empty option
    { value: 'manga', viewValue: 'Manga' },
    { value: 'horror', viewValue: 'Horror' },
    { value: 'fantasy', viewValue: 'Fantasy' },
    { value: 'sci-fi', viewValue: 'Sci-Fi' },
    { value: 'romance', viewValue: 'Romance' },
    { value: 'mystery', viewValue: 'Mystery' },
    { value: 'non-fiction', viewValue: 'Non-Fiction' },
    { value: 'biography', viewValue: 'Biography' },
    { value: 'adventure', viewValue: 'Adventure' },
    { value: 'history', viewValue: 'History' }
  ];


  constructor(private readonly formBuilder: FormBuilder, private readonly service: BooksServices) {
    this.form = this.formBuilder.group( {
      name: [null],
      type: [null]
    })
  }

  ngOnInit(): void {

    // Initialization logic goes here
    console.log('Starting On Mommy');

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: result => console.log('Book saved successfully:', result),
      error: error => this.onError()
    });
  }

  private onError() {
    return this.snackBar.open('Failed to save book', '', {duration: 5000});
  }
}
