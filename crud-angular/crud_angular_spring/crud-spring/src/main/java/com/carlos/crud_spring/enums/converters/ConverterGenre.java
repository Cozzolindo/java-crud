package com.carlos.crud_spring.enums.converters;

import java.util.stream.Stream;

import com.carlos.crud_spring.enums.Genre;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true) // Automatically applies this converter to Genre fields
public class ConverterGenre implements AttributeConverter<Genre, String> {

  @Override
  public String convertToDatabaseColumn(Genre genre) {
    if (genre == null) {
      return null;
    }
    return genre.getValue(); // Converts Genre enum to its string value
  }

  @Override
  public Genre convertToEntityAttribute(String value) {
    if (value == null || value.isEmpty()) {
      return null;
    }
    return Stream.of(Genre.values())
                 .filter(genre -> genre.getValue().equals(value))
                 .findFirst()
                 .orElseThrow(() -> new IllegalArgumentException("Unknown genre: " + value)); // Converts string back to Genre enum
  }

}
