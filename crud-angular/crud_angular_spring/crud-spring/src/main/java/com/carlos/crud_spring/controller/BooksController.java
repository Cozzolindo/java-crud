package com.carlos.crud_spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BooksController {

  private final BooksRepository booksRepository;

  // Endpoint to get all books
  @GetMapping
  public List<Books> booksList(){
    return booksRepository.findAll();
  }

  // Endpoint to fget a book by ID
  @GetMapping("/{id}")
  public ResponseEntity<Books> findBooksById(@PathVariable Long id){
    return booksRepository.findById(id)
    .map(record -> ResponseEntity.ok().body(record))
    .orElse(ResponseEntity.notFound().build());
  }

  // Endpoint to create a new book
  @PostMapping
  public ResponseEntity<Books> create(@RequestBody Books book) {

    return ResponseEntity.status(HttpStatus.CREATED)
            .body(booksRepository.save(book));

  }


  // Endpoint to update a book
  @PutMapping("/{id}")
  public ResponseEntity<Books> update(@PathVariable Long id, @RequestBody Books book){
    return booksRepository.findById(id)
      .map(record -> {
        record.setName(book.getName());
        record.setType(book.getType());
        Books updated = booksRepository.save(record);
        return ResponseEntity.ok().body(updated);
      })
      .orElse(ResponseEntity.notFound().build());
  }

  // Endpoint to delete a book
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id){
    return booksRepository.findById(id)
      .map(record -> {
          booksRepository.deleteById(id);
          return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
  }

}
