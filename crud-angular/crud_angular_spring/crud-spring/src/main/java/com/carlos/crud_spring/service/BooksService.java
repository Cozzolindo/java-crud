package com.carlos.crud_spring.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;

import com.carlos.crud_spring.dto.BooksDTO;
import com.carlos.crud_spring.dto.mapper.BooksMapper;
import com.carlos.crud_spring.enums.Genre;
import com.carlos.crud_spring.exception.RecordNotFoundException;
import com.carlos.crud_spring.repository.BooksRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Service
@Validated
public class BooksService {

  private final BooksRepository booksRepository;
  private final BooksMapper booksMapper;

  public BooksService(BooksRepository booksRepository, BooksMapper booksMapper) {
    this.booksRepository = booksRepository;
    this.booksMapper = booksMapper;
  }

  public List<BooksDTO> booksList(){

    return booksRepository.findAll()
      .stream()
      .map(booksMapper::toDTO) // :: equal to lambda expression booksMapper::toDTO
      .toList(); // Java 16+ Stream.toList() returns an unmodifiable list
      //.collect(Collectors.toList());
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
        recordFound.setType(Genre.MANGA);
        return booksMapper.toDTO(booksRepository.save(recordFound));
      }).orElseThrow(() -> new RecordNotFoundException(id));
  }

    public void delete(@NotNull @Positive Long id){
      booksRepository.delete(booksRepository.findById(id)
        .orElseThrow(() -> new RecordNotFoundException(id)));
  }
}
