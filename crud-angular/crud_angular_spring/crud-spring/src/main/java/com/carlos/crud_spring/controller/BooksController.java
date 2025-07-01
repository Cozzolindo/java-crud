package com.carlos.crud_spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BooksController {

  private final BooksRepository booksRepository;

  @GetMapping
  public List<Books> booksList(){
    return booksRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Books> findBooksById(@PathVariable Long id){
    return booksRepository.findById(id)
    .map(record -> ResponseEntity.ok().body(record))
    .orElse(ResponseEntity.notFound().build());
  }


  @PostMapping
  public ResponseEntity<Books> create(@RequestBody Books book) {

      return ResponseEntity.status(HttpStatus.CREATED)
              .body(booksRepository.save(book));

  }

}
