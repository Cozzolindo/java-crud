package com.carlos.crud_spring.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

@RestController
@RequestMapping("/api/books")
public class BooksController {


  public BooksController(BooksRepository booksRepository) {
    this.booksRepository = booksRepository;
  }

  private final BooksRepository booksRepository;

  @GetMapping
  public List<Books> booksList(){
    return booksRepository.findAll();
  }


}
