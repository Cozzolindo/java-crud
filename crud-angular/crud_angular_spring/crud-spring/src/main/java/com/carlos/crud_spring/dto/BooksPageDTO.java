package com.carlos.crud_spring.dto;

import java.util.List;

public record BooksPageDTO(List<BooksDTO> books, int totalPages, long totalElements) {

    public BooksPageDTO(List<BooksDTO> books, int totalPages, long totalElements) {
        this.books = books;
        this.totalPages = totalPages;
        this.totalElements = totalElements;
    }

}
