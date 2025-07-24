package com.carlos.crud_spring.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;

import com.carlos.crud_spring.exception.RecordNotFoundException;
import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Service
@Validated
public class BooksService {

  private final BooksRepository booksRepository;

  public BooksService(BooksRepository booksRepository) {
    this.booksRepository = booksRepository;
  }

  public List<Books> booksList(){
    return booksRepository.findAll();
  }

  public Books findBooksById(@NotNull @Positive Long id){
    return booksRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public Books create(@Valid Books book) {
    return booksRepository.save(book);
  }

    public Books update(Long id, @RequestBody Books book){
    return booksRepository.findById(id)
      .map(recordFound -> {
        recordFound.setName(book.getName());
        recordFound.setType(book.getType());
        return booksRepository.save(recordFound);
      }).orElseThrow(() -> new RecordNotFoundException(id));
  }

    public void delete(@NotNull @Positive Long id){
      booksRepository.delete(booksRepository.findById(id)
        .orElseThrow(() -> new RecordNotFoundException(id)));
  }
}
