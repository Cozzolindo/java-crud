package com.carlos.crud_spring.exception;

public class RecordNotFoundException extends RuntimeException {

  private static final long serialVersionUID = 1L;

  public RecordNotFoundException(Long id) {
        super("Book not found with ID: " + id);
    }

}
