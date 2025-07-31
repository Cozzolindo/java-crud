package com.carlos.crud_spring.enums.converters;

import com.carlos.crud_spring.enums.Status;

import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true) // Automatically applies this converter to Status fields
public class ConverterStatus implements AttributeConverter<Status, String> {

  @Override
  public String convertToDatabaseColumn(Status status) {
    if (status == null) {
      return null;
    }
    return status.getValue(); // Converts Status enum to its string value
  }

  @Override
  public Status convertToEntityAttribute(String value) {
    if (value == null || value.isEmpty()) {
      return null;
    }
    return Stream.of(Status.values())
                 .filter(status -> status.getValue().equals(value))
                 .findFirst()
                 .orElseThrow(() -> new IllegalArgumentException("Unknown status: " + value)); // Converts string back to Status enum
  }

}
