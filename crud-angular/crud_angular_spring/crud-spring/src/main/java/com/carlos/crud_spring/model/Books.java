package com.carlos.crud_spring.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@SQLDelete(sql = "UPDATE Books SET status = 'Unavailable' WHERE id = ?") // Update to mark as unavailable instead of deleting (Soft Delete)
@Where(clause = "status = 'Available'") // Only show available books
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

  @NotNull
  @NotBlank(message = "Book status cannot be empty")
  @Size(min = 1, max = 15, message = "Book status must be between 1 and 15 characters")
  @Column(name = "Status", nullable = false, length = 15)
  @Pattern(regexp = "Available|Unavailable", message = "Book status must be either 'Available' or 'Unavailable'")
  //Could use @JsonIgnore instead of the DTO to avoid exposing this field in the API
  private String status = "Available";
}
