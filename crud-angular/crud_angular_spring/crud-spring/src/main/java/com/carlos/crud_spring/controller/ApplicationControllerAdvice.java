package com.carlos.crud_spring.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.HttpStatus;

import com.carlos.crud_spring.exception.RecordNotFoundException;

@RestControllerAdvice
public class ApplicationControllerAdvice {

  @ExceptionHandler(RecordNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public String handleNotFoundException(RecordNotFoundException e) {
    // Handle exceptions globally
    return e.getMessage();
  }

}
