package com.carlos.crud_spring.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;

import com.carlos.crud_spring.dto.BooksDTO;
import com.carlos.crud_spring.dto.BooksPageDTO;
import com.carlos.crud_spring.dto.mapper.BooksMapper;
import com.carlos.crud_spring.exception.RecordNotFoundException;
import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

@Service
@Validated
public class BooksService {

  private final BooksRepository booksRepository;
  private final BooksMapper booksMapper;

  public BooksService(BooksRepository booksRepository, BooksMapper booksMapper) {
    this.booksRepository = booksRepository;
    this.booksMapper = booksMapper;
  }

  public BooksPageDTO booksList(@PositiveOrZero int pageNum, @Positive @Max(10) int pageSize) {

    Page<Books> booksPage = booksRepository.findAll(PageRequest.of(pageNum, pageSize));
    List<BooksDTO> books = booksPage.get().map(booksMapper::toDTO).toList();
    return new BooksPageDTO(books, booksPage.getTotalPages(), booksPage.getTotalElements());
  }

  public BooksDTO findBooksById(@NotNull @Positive Long id){
    return booksRepository.findById(id).map(booksMapper::toDTO)
    .orElseThrow(() -> new RecordNotFoundException(id));
  }

  public BooksDTO create(@Valid @NotNull BooksDTO book) {
    return booksMapper.toDTO(booksRepository.save(booksMapper.toEntity(book)));
  }

    public BooksDTO update(Long id, @RequestBody @Valid @NotNull BooksDTO book){
    return booksRepository.findById(id)
      .map(recordFound -> {
        recordFound.setName(book.name());
        recordFound.setType(booksMapper.convertGenre(book.type())); // Converts string to Genre enum
        return booksMapper.toDTO(booksRepository.save(recordFound));
      }).orElseThrow(() -> new RecordNotFoundException(id));
  }

    public void delete(@NotNull @Positive Long id){
    booksRepository.delete(booksRepository.findById(id)
    .orElseThrow(() -> new RecordNotFoundException(id)));
  }
}
