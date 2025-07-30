package com.carlos.crud_spring.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record BooksDTO(
        @JsonProperty("id") Long id,
        @NotNull @NotBlank @Size(min = 1, max = 200) String name,
        @NotNull @NotBlank @Size(min = 1, max = 10) String type) {

}
