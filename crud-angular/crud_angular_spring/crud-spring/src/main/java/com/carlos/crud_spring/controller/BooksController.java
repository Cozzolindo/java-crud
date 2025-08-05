package com.carlos.crud_spring.controller;


import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.crud_spring.dto.BooksDTO;
import com.carlos.crud_spring.dto.BooksPageDTO;
import com.carlos.crud_spring.service.BooksService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

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
  public BooksPageDTO booksList(@RequestParam(defaultValue = "0") @PositiveOrZero  int pageNum,
        @RequestParam(defaultValue = "10") @Positive @Max(100) int pageSize) {
    return booksService.booksList(pageNum, pageSize);
  }

  // Endpoint to get a book by ID
  @GetMapping("/{id}")
  public BooksDTO findBooksById(@PathVariable @NotNull @Positive Long id){
    return booksService.findBooksById(id);
  }

  // Endpoint to create a new book
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public BooksDTO create(@RequestBody @Valid BooksDTO book) {
    return booksService.create(book);
  }


  // Endpoint to update a book
  @PutMapping("/{id}")
  public BooksDTO update(@PathVariable Long id, @RequestBody @Valid BooksDTO book){
    return booksService.update(id, book);
  }

  // Endpoint to hard delete a book
  @DeleteMapping("/{id}")
  @ResponseStatus(code = HttpStatus.NO_CONTENT)
  public void delete(@PathVariable @NotNull @Positive Long id){
    booksService.delete(id);
  }

}
