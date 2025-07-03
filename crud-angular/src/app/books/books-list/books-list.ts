import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from '../model/books';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';
import { BooksServices } from '../services/books_services';

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

  constructor(private readonly service: BooksServices) {}

  // Method to handle the deletion of a book
  onDelete(book: Books) {
    if (confirm(`Are you sure you want to delete the book "${book.name}"?`)) {
      this.service.delete(book.id).subscribe({
        next: () => {
          this.refresh.emit(); // Emit event to refresh the list
        },
        error: (error) => {
          console.error('Error deleting book:', error);
          alert('Failed to delete the book. Please try again later.');
        }
      });
    }
  }
}
