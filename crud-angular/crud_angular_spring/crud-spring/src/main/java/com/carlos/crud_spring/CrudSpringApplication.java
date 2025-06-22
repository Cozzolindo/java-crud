package com.carlos.crud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

  @Bean
  CommandLineRunner initDataBase(BooksRepository booksRepository) {
    return args -> {
      booksRepository.deleteAll();

      Books b = new Books();
      b.setName("JoJo: Steel Ball Run 01");
      b.setType("Manga");
      booksRepository.save(b);
    };
  }
}
