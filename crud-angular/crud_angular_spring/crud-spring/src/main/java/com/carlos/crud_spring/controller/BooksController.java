package com.carlos.crud_spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BooksController {

  private final BooksRepository booksRepository;

  @GetMapping
  public List<Books> booksList(){
    return booksRepository.findAll();
  }

  @PostMapping
  public ResponseEntity<Books> create(@RequestBody Books book) {

      return ResponseEntity.status(HttpStatus.CREATED)
              .body(booksRepository.save(book));

  }

}
