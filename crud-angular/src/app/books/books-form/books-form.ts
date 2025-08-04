import { Component, inject, Input, OnInit   } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { BooksServices } from '../services/books_services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

// Define the Genre interface for the select dropdown
// This interface represents the structure of a genre object
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

  // Input property to receive the book ID for editing
  // If this property is provided, the form will be in edit mode
  @Input() id?: string;

  // FormGroup to manage the form controls and validation
  // This form will contain fields for book name and type
  form: FormGroup;

  // Injecting the necessary services and modules
  // NonNullableFormBuilder is used to create the form group with non-nullable controls
  private readonly snackBar = inject(MatSnackBar);
  isEditMode = false;

  // Define the genres for the select dropdown
  // This can be extended or modified as needed
  genres: Genre[] = [
    { value: '', viewValue: '' }, // Null/empty option
    { value: 'Manga', viewValue: 'Manga' },
    { value: 'Horror', viewValue: 'Horror' },
    { value: 'Fantasy', viewValue: 'Fantasy' },
    { value: 'Science Fiction', viewValue: 'Science Fiction' },
    { value: 'Romance', viewValue: 'Romance' },
    { value: 'Mystery', viewValue: 'Mystery' },
    { value: 'Non-fiction', viewValue: 'Non-Fiction' },
    { value: 'Biography', viewValue: 'Biography' },
    { value: 'Thriller', viewValue: 'Thriller' },
    { value: 'Fiction', viewValue: 'Fiction' },
    { value: 'History', viewValue: 'History' }
  ];

  // Constructor to initialize the form and inject dependencies
  // The form is created with two controls: name and type
  constructor(
    // Injecting the NonNullableFormBuilder to create the form group
    // The form controls are initialized with validators for required fields and non-whitespace patterns
    private readonly formBuilder: NonNullableFormBuilder,
    // Injecting the BooksServices to handle book-related operations
    // The BooksServices will be used to save, update, and retrieve book data
    private readonly service: BooksServices,
    // Injecting the MatSnackBar to show notifications
    // The MatSnackBar will be used to display success or error messages
    private readonly location: Location
  ) {
    this.form = this.formBuilder.group( {
      name: ['', [Validators.required, Validators.pattern(/\S+/)]],
      type: ['', [Validators.required, Validators.pattern(/\S+/)]]
    })
  }

  // ngOnInit lifecycle hook to initialize the component
  // This method is called when the component is initialized
  ngOnInit(): void {

    // Check if the id is provided to determine if the form is in edit mode
    // If the id is present, set isEditMode to true and call onEdit to load the book data
    this.isEditMode = !!this.id;

    // If the form is in edit mode, call onEdit with the provided id
    // This will fetch the book data and populate the form controls
    if (this.isEditMode && this.id) {
      this.onEdit(this.id);
    }

    console.log('Starting On BooksForm');
  }

  // Method to handle form submission
  // This method is called when the form is submitted
  onSubmit() {

    // Check if the form is valid before proceeding
    // If the form is invalid, return early
    if(this.isEditMode && this.id){
      this.service.update(this.id, this.form.value).subscribe({
        next: result => this.onSuccess(),
        error: error => this.onError()
      });
    }
    // If the form is in edit mode, call the update method of the service with the id and form value
    // If the form is not in edit mode, call the save method of the service with
    else{
      this.service.save(this.form.value).subscribe({
        next: result => this.onSuccess(),
        error: error => this.onError()
      });
    }

  }

  // Cancel the form and go back
  onCancel() {
    // This method is called when the user cancels the form
    // It navigates back to the previous page using the Location service
    this.location.back();
  }

  // Show snackbar when there is an error
  private onError() {
    // This method is called when there is an error saving or updating the book
    // It displays an error message using the MatSnackBar
    this.snackBar.open('Failed to save book', '', {duration: 5000});
  }

  // Show snackbar when the book is saved successfully
  private onSuccess() {
    // This method is called when the book is saved or updated successfully
    // It displays a success message using the MatSnackBar
    this.snackBar.open('Book saved successfully', '', {duration: 5000});
    this.onCancel();
  }

  // Check if the form is in edit mode and load the book data if it is
  private onEdit(id: string) {
    // This method is called to load the book data for editing
    // It fetches the book by its id using the BooksServices and populates the form
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
