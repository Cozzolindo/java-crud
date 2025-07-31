package com.carlos.crud_spring.dto.mapper;

import org.springframework.stereotype.Component;

import com.carlos.crud_spring.dto.BooksDTO;
import com.carlos.crud_spring.enums.Genre;
import com.carlos.crud_spring.model.Books;

@Component
public class BooksMapper {

  public BooksDTO toDTO(Books book) {
    if(book == null) {
      return null;
    }
    return new BooksDTO(book.getId(), book.getName(), book.getType().getValue());
  }

  public Books toEntity(BooksDTO bookDTO) {
    Books book = new Books();
    if (bookDTO.id() != null) {
      book.setId(bookDTO.id());
    }
    book.setName(bookDTO.name());
    book.setType(convertGenre(bookDTO.type())); // Converts string to Genre enum
    return book;
  }

  public Genre convertGenre(String genre) {
    if (genre == null || genre.isBlank()) {
      return null;
    }
    return switch (genre){
      case "Fiction" -> Genre.FICTION;
      case "Non-Fiction" -> Genre.NON_FICTION;
      case "Mystery" -> Genre.MYSTERY;
      case "Fantasy" -> Genre.FANTASY;
      case "Science Fiction" -> Genre.SCIENCE_FICTION;
      case "Biography" -> Genre.BIOGRAPHY;
      case "History" -> Genre.HISTORY;
      case "Romance" -> Genre.ROMANCE;
      case "Thriller" -> Genre.THRILLER;
      case "Horror" -> Genre.HORROR;
      case "Manga" -> Genre.MANGA;
      default -> throw new IllegalArgumentException("Invalid genre: " + genre);
    };
  }
}
