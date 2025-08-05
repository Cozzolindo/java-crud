package com.carlos.crud_spring.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.carlos.crud_spring.enums.Genre;
import com.carlos.crud_spring.enums.Status;
import com.carlos.crud_spring.enums.converters.ConverterGenre;
import com.carlos.crud_spring.enums.converters.ConverterStatus;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "books")
@SQLDelete(sql = "UPDATE books SET status = 'Unavailable' WHERE id = ?") // Update to mark as unavailable instead of deleting (Soft Delete)
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
  @Column(name = "Genre", nullable = false, length = 10)
  @Convert(converter = ConverterGenre.class) // Use the Genre converter to store enum as string
  private Genre type;

  @NotNull
  @Column(name = "Status", nullable = false, length = 15)
  //Could use @JsonIgnore instead of the DTO to avoid exposing this field in the API
  @Convert(converter = ConverterStatus.class) // Use the Status converter to store enum as string
  private Status status = Status.AVAILABLE;

  public Long getId() {
    return id;
  }


  public String getName() {
    return name;
  }

  public Genre getType() {
    return type;
  }

  public Status getStatus() {
    return status;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setType(Genre type) {
    this.type = type;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  @Override
  public String toString() {
    return "Books [id=" + id + ", name=" + name + ", type=" + type + ", status=" + status + "]";
  }


}
