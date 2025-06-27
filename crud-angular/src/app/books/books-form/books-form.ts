import { Component, inject, OnInit   } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { BooksServices } from '../services/books_services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';


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
    { value: 'Manga', viewValue: 'Manga' },
    { value: 'Horror', viewValue: 'Horror' },
    { value: 'Fantasy', viewValue: 'Fantasy' },
    { value: 'Sci-Fi', viewValue: 'Sci-Fi' },
    { value: 'Romance', viewValue: 'Romance' },
    { value: 'Mystery', viewValue: 'Mystery' },
    { value: 'Non-fiction', viewValue: 'Non-Fiction' },
    { value: 'Biography', viewValue: 'Biography' },
    { value: 'Adventure', viewValue: 'Adventure' },
    { value: 'History', viewValue: 'History' }
  ];


  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly service: BooksServices,
    private readonly location: Location
  ) {
    this.form = this.formBuilder.group( {
      name: ['', [Validators.required, Validators.pattern(/\S+/)]],
      type: ['', [Validators.required, Validators.pattern(/\S+/)]]
    })
  }

  ngOnInit(): void {

    // Initialization logic goes here
    console.log('Starting On BooksForm');
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: result => this.onSuccess(),
      error: error => this.onError()
    });
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Failed to save book', '', {duration: 5000});
  }

  private onSuccess() {
    this.snackBar.open('Book saved successfully', '', {duration: 5000});
    this.onCancel();
  }
}
