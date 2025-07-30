package com.carlos.crud_spring.dto.mapper;

import org.springframework.stereotype.Component;

import com.carlos.crud_spring.dto.BooksDTO;
import com.carlos.crud_spring.model.Books;

@Component
public class BooksMapper {

  public BooksDTO toDTO(Books book) {
    if(book == null) {
      return null;
    }
    return new BooksDTO(book.getId(), book.getName(), book.getType());
  }

  public Books toEntity(BooksDTO bookDTO) {
    Books book = new Books();
    if (bookDTO.id() != null) {
      book.setId(bookDTO.id());
    }
    book.setName(bookDTO.name());
    book.setType(bookDTO.type());
    return book;
  }
}
