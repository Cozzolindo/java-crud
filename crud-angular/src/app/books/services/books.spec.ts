import { TestBed } from '@angular/core/testing';

import { BooksServices } from './books_services';

describe('BooksServices', () => {
  let service: BooksServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
