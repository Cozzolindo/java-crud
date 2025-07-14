package com.carlos.crud_spring.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
public class Books {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty("id")
  private Long id;

  @NotNull
  @NotBlank(message = "Book name cannot be empty")
  @Size(min = 1, max = 200, message = "Book name must be between 1 and 200 characters")
  @Column(name = "Name", nullable = false, length = 200)
  private String name;

  @NotNull
  @NotBlank(message = "Book type cannot be empty")
  @Size(min = 1, max = 10, message = "Book type must be between 1 and 10 characters")
  @Column(name = "Genre", nullable = false, length = 10)
  private String type;

}
