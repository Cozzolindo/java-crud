package com.carlos.crud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.carlos.crud_spring.enums.Genre;
import com.carlos.crud_spring.model.Books;
import com.carlos.crud_spring.repository.BooksRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

  @Bean
  @Profile("dev")
  CommandLineRunner initDataBase(BooksRepository booksRepository) {
    return args -> {
      booksRepository.deleteAll();

      for(int i = 0; i<20; i++){
        Books c = new Books();
        c.setName("Senhor dos Anéis :" + i);
        c.setType(Genre.FANTASY);
        booksRepository.save(c);

      }
      Books b = new Books();
      b.setName("JoJo: Steel Ball Run 01");
      b.setType(Genre.MANGA);
      booksRepository.save(b);
    };
  }
}
