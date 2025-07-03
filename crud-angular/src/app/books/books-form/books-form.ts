import { Component, inject, Input, OnInit   } from '@angular/core';
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

  @Input() id?: string;

  form: FormGroup;


  private readonly snackBar = inject(MatSnackBar);
  isEditMode = false;

  // Define the genres for the select dropdown
  // This can be extended or modified as needed
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
  this.isEditMode = !!this.id;

  if (this.isEditMode && this.id) {
    this.onEdit(this.id);
  }

  console.log('Starting On BooksForm');
}

  onSubmit() {

    if(this.isEditMode && this.id){
      this.service.update(this.id, this.form.value).subscribe({
        next: result => this.onSuccess(),
        error: error => this.onError()
      });
    }else{
      this.service.save(this.form.value).subscribe({
        next: result => this.onSuccess(),
        error: error => this.onError()
      });
    }

  }

  // Cancel the form and go back
  onCancel() {
    this.location.back();
  }

  // Show snackbar when there is an error
  private onError() {
    this.snackBar.open('Failed to save book', '', {duration: 5000});
  }

  // Show snackbar when the book is saved successfully
  private onSuccess() {
    this.snackBar.open('Book saved successfully', '', {duration: 5000});
    this.onCancel();
  }

  // Check if the form is in edit mode and load the book data if it is
  private onEdit(id: string) {
    this.service.getBookById(id).subscribe({
      next: book => {
        this.form.patchValue({
          name: book.name,
          type: book.type
        });
      },
      error: error => console.error('Error loading book:', error)
    });
  }
}
