package com.carlos.crud_spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.service.BooksService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api/books")
@Validated
public class BooksController {

  private final BooksService booksService;

  public BooksController(BooksService booksService) {

    this.booksService = booksService;
  }


  // Endpoint to get all books
  @GetMapping
  public List<Books> booksList(){
    return booksService.booksList();
  }

  // Endpoint to get a book by ID
  @GetMapping("/{id}")
  public ResponseEntity<Books> findBooksById(@PathVariable @NotNull @Positive Long id){
    return booksService.findBooksById(id)
    .map(recordFound -> ResponseEntity.ok().body(recordFound))
    .orElse(ResponseEntity.notFound().build());
  }

  // Endpoint to create a new book
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Books create(@RequestBody @Valid Books book) {
    return booksService.create(book);
  }


  // Endpoint to update a book
  @PutMapping("/{id}")
  public ResponseEntity<Books> update(@PathVariable Long id, @RequestBody Books book){
    return booksService.update(id, book)
      .map(recordFound -> ResponseEntity.ok().body(recordFound))
      .orElse(ResponseEntity.notFound().build());
  }

  // Endpoint to hard delete a book
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable @NotNull @Positive Long id){
    if(booksService.delete(id)){
      return ResponseEntity.noContent().build();
    }else{
      return ResponseEntity.notFound().build();
    }
  }

}
