import { Books } from "./books";


export interface BooksPage {
  books: Books[];
  totalPages: number;
  totalElements: number;
}
