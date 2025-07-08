import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Books } from '../model/books';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';
import { BooksServices } from '../services/books_services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialog } from '../../shared/components/confirmation-dialog/confirmation-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-books-list',
  imports: [SharedModule, RouterModule],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss'
})
export class BooksList {

  @Input() titles: Books[] = [];
  @Output() refresh = new EventEmitter<void>(); // Event to trigger a refresh after deletion

  readonly displayedColumns = ['name', 'type', 'actions'];

  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);

  constructor(private readonly service: BooksServices) {}

  // Method to handle the deletion of a book
  onDelete(book: Books) {

    // Simple snackbar confirmation
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      width: '400px',
      data: { bookName: book.name },
      enterAnimationDuration: '2000ms', // 2 second slow opening
      exitAnimationDuration: '1000ms',  // 1 second closing
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result === true) {
        this.service.delete(book.id).subscribe({
          next: () => {
            this.refresh.emit();
            // Show success message with snackbar
            this.snackBar.open(`Book "${book.name}" deleted successfully!`, 'Close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          error: (error) => {
            console.error('Error deleting book:', error);
            // Show error message with snackbar
            this.snackBar.open('Failed to delete the book. Please try again later.', 'Close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }
        });
      }
    });
  }
}
